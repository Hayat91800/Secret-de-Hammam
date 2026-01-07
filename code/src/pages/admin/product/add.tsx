"use client";
import { NavLink } from "react-router";
import styles from "../../../assets/css/admin_css/add.module.css";

const AddProduct = () => {
  return (
    <div className={styles.formContainer}>
      {/* En-tête avec bouton de retour */}
      <header className={styles.header}>
        <div>
          <h1>Nouveau Produit</h1>
          <p>Ajoutez un soin ou un accessoire au catalogue</p>
        </div>
        <NavLink to="/admin/products" className={styles.backBtn}>
          Annuler
        </NavLink>
      </header>

      {/* Le formulaire statique */}
      <form className={styles.productForm}>
        {/* Nom du produit */}
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom du soin</label>
          <input 
            type="text" 
            id="name" 
            placeholder="ex: Huile d'Argan Bio" 
          />
        </div>

        {/* Ligne : Prix et Stock */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="price">Prix de vente (€)</label>
            <input 
              type="number" 
              id="price" 
              step="0.01" 
              placeholder="0.00" 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="stock">Quantité en stock</label>
            <input 
              type="number" 
              id="stock" 
              placeholder="0" 
            />
          </div>
        </div>

        {/* Catégorie (Select) */}
        <div className={styles.formGroup}>
          <label htmlFor="category">Catégorie</label>
          <select id="category">
            <option value="">-- Choisir une catégorie --</option>
            <option value="huiles">Huiles</option>
            <option value="savons">Savons</option>
            <option value="accessoires">Accessoires</option>
          </select>
        </div>

        {/* Description */}
        <div className={styles.formGroup}>
          <label htmlFor="description">Description et bienfaits</label>
          <textarea 
            id="description" 
            rows={5} 
            placeholder="Décrivez ici le produit..."
          ></textarea>
        </div>

        {/* Image (Simulée) */}
        <div className={styles.formGroup}>
          <label htmlFor="image">Lien de l'image</label>
          <input 
            type="text" 
            id="image" 
            placeholder="URL de l'image" 
          />
        </div>

        {/* Bouton de validation */}
        <button type="button" className={styles.submitBtn}>
          Créer le produit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;