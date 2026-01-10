"use client";

import { useId, useState } from "react";
import type { AdminProductsAddProps } from "../models/props/admin_products_add_props";
import styles from "../assets/css/form.module.css";
import { useForm } from "react-hook-form";
import type { Product } from "../../models/product";
import type { ZodIssue } from "zod/v3";

const AdminForm = ({ categories, skins, bodyparts, packs, validator }: AdminProductsAddProps) => {

  const idId = useId();
  const nameId = useId();
  const imageId = useId();
  const priceId = useId();
  const descriptionId = useId();
  const categoryId = useId();

  // Stocker les messages d'erreur de validation côté serveur
  const [serverErrors, setserverErrors] = useState<Partial<Product>>();


  {/* REACT HOOK FORM
      - register : 
          > remplacer l'attribut name
          > permet de référencer le champs de saisie lors de la soumission du formulaire
      - handlesubmit:
          > permet de gerer la soumission du formulaire
      - reset:
          > permet de préremplir le formulaire avec les donnés initial
      - errors:
          > permet de recuperer les erreurs de saisie selon les contraintes de validations définis
    */}

  const { register, handleSubmit, reset, formState: { errors } } = useForm<Partial<Product>>();
  
  {/* Fonction permettant soumission du formulaire
      - data stock la saisie du formulaire*/}
  
  const submitForm = async (data: Partial<Product>) => {
    const normalizedData = {
      ...data,
      skin_ids: (data.skin_ids as unknown as string[]).join(),
      pack_ids: (data.pack_ids as unknown as string[]).join(),
      body_part_ids: (data.skin_ids as unknown as string[]).join(),
    };
    
    // validation de la saisie avec le validateur côté serveur
    const validation = await validator(normalizedData);

    // Si la validation échoue
    if (validation instanceof Error) {
      // Stocker les messages d'erreurs dans un objet
      let errors = {};
      
      // récupérer les messages d'erreur
      (JSON.parse(validation.message) as ZodIssue[]).map((item) => {
        errors = { ...errors, [item.path.shift() as string]: item.message };
        return errors;
      });

      // Définir l'état
      setserverErrors(errors);

      return;

    }

};

  return (

    <section className={styles.formWrapper}>
        {/* onSubmit: evenement javasript
            handleSubmit: react hook form
            submitForm: fonction que l'on crée*/}
     <form className={styles.orientalForm } encType="multipart/form-data" onSubmit={ handleSubmit(submitForm) }>
            <div>
              <label htmlFor={nameId}></label>
          <input type="text" id={nameId} placeholder="Nom" {...register('name', { required: "Le nom est obligatoire", minLength: { value: 2, message: "Un nom doit comporter au minimum 2 caractères" }, maxLength: { value: 50, message: "Un nom doit comporté au maximum 50 caracteres" } })} />
          {/* AFFICHER LES MESSAGES D'ERREURS
              Utiliser le nom de champs définit dans register
              */}
          <small role="alert"> {errors.name?.message ?? serverErrors?.name}</small>
        </div>

      <div>
              <label htmlFor={imageId}></label>
          <input type="text" id={imageId} placeholder="Image" {...register('image', { required: "Le nom de l'image est obligatoire", minLength: { value: 2, message: "Une image doit comporter au minimum 2 caractères" }, maxLength: { value: 50, message: "Un image peut comporter au maximum 50 caracteres" } })} />
          <small role="alert"> {errors.image?.message ?? serverErrors?.image}</small>
      </div>

      <div>
              <label htmlFor={priceId}></label>
              { <input type="text" id={priceId} placeholder="Prix" {...register('price',/* { required: "Le prix est obligatoire", minLength: { value: 1, message: "Un prix doit comporter au minimum 1 chiffre" }, maxLength: { value: 4, message: "Un prix peut comporter au maximum 4 caracteres dont 2 decimales" } }*/)} /> }
          <small role="alert"> {errors.price?.message ?? serverErrors?.price}</small>
      </div>

      <div>
          <label htmlFor={descriptionId}></label>
          <textarea id={descriptionId} 
    placeholder="Décrivez les rituels et les vertus de ce soin..."  rows={5}
    {...register('description', { required: "La description est obligatoire", minLength: { value: 20, message: "Une description doit comporter au minimum 20 " }})}>
    </textarea>
          <small role="alert"> {errors.description?.message ?? serverErrors?.description}</small>
      </div>

      {/* CRUD ====> CREATE
          - si le formulaire contient un champ de fichier : ajouter l'attribut    enctype="multipart/form-data"
          - pour les champs en relation :
             FK : créer, soit une liste déroulante <select>, soit des boutons radio
                 > sélection d'un seul choix
             table de jointure : cases à cocher
                 > sélection de plusieurs choix
      */}

        <div className={styles.formGroup}> 
          <label htmlFor={categoryId}>Catégorie</label>
          <select className={styles.title} id={categoryId} {...register('category_id', { required: "Veuillez selectionner une category" })}>
            
          <option value="">-- Choisir une catégorie --</option>
          {
          categories.map((item) => {
              return (
                <option key={item.id} value={item.id}> {item.name} </option> 
              )
            })
          }    
          </select>
          <small role="alert"> {errors.category_id?.message ?? serverErrors?.category_id}</small>
      </div>

     <div className={styles.formGroup}>
  <p className={styles.groupTitle}>Type de peau</p>
  <div className={styles.checkboxGrid}>
    {skins.map((item) => (
      <label key={item.id} className={styles.checkboxItem}>
        <input 
          type="checkbox" 
          value={item.id} 
          id={`skin-${item.id}`} 
          {...register('skin_ids', { required: "Veuillez selectionner un ou plusieurs type de peau" })} />
        <small role="alert"> {errors.skin_ids?.message ?? serverErrors?.skin_ids}</small>
        <span>{item.type}</span>
      </label>
    ))}
  </div>
        </div>

         <div className={styles.formGroup}>
  <p className={styles.groupTitle}>Zone du corps</p>
  <div className={styles.checkboxGrid}>
    {bodyparts.map((item) => (
      <label key={item.id} className={styles.checkboxItem}>
        <input 
          type="checkbox" 
          value={item.id} 
          id={`bodyparts-${item.id}`} 
          {...register('body_part_ids', { required: "Veuillez selectionner une ou plusieurs zone du corps" })} />
        <small role="alert"> {errors.body_part_ids?.message ?? serverErrors?.body_part_ids}</small>
        <span>{item.name}</span>
      </label>
    ))}
  </div>
        </div>

        <div className={styles.formGroup}>
  <p className={styles.groupTitle}>Packs</p>
  <div className={styles.checkboxGrid}>
    {packs.map((item) => (
      <label key={item.id} className={styles.checkboxItem}>
        <input 
          type="checkbox" 
          value={item.id} 
          id={`packs-${item.id}`} 
          {...register('pack_ids', { required: "Veuillez selectionner un ou plusieurs pack" })} />
        <small role="alert"> {errors.pack_ids?.message ?? serverErrors?.pack_ids}</small>
        <span>{item.name}</span>
      </label>
    ))}
  </div>
        </div>

      <div>
        <input type="hidden"  id={idId}  {...register('id')} />
      <button type="submit">Créer produit</button>
      </div>
      
      </form>
    </section>
  );
};

export default AdminForm;