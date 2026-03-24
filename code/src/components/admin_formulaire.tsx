"use client";

import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { ZodIssue } from "zod/v3";
import type { Product } from "../../models/product";
import styles from "../assets/css/form.module.css";
import type { AdminProductsAddProps } from "../models/props/admin_products_add_props";
import ProductApiService from "../services/product_api_service";

const AdminForm = ({
	categories,
	skins,
	bodyparts,
	packs,
	validator,
	dataToUpdate,
}: AdminProductsAddProps) => {
	const idId = useId();
	const nameId = useId();
	const imageId = useId();
	const priceId = useId();
	const descriptionId = useId();
	const categoryId = useId();

	// console.log(dataToUpdate);

	// useNavigtate hook: permet de créer une redirection
	const navigate = useNavigate();

	// Stocker les messages d'erreur de validation côté serveur
	const [serverErrors, setserverErrors] = useState<Partial<Product>>();

	// Message lié à la soumission du formulaire en cas d'echec
	const [message, setMessage] = useState<string>("");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Product>>();

	// Pré-remplir le formulaire avant l'affichage du composant
	// Use effect ne s'execute que dans un composantclient: "use client";

	useEffect(() => {
		// Si des donnés sont à mettre à jour (update)
		if (dataToUpdate) {
			// Normaliser les donnés de saisies: se baser sur les donnés testees dans flashpost pour que les donnés soient identiques.
			// Modifier le models si besoin
			const normalizedData = {
				...dataToUpdate,
				skin_ids: (dataToUpdate.skin_ids as string).split(","),
				pack_ids: (dataToUpdate.pack_ids as string).split(","),
				body_part_ids: (dataToUpdate.body_part_ids as string).split(","),
			};
			reset(normalizedData);
		}
	}, [dataToUpdate, reset]);

	const submitForm = async (data: Partial<Product>) => {
		// Normaliser les donnés de saisies: se baser sur les donnés testees dans flashpost pour que les donnés soient identiques.
		const normalizedData = {
			...data,
			skin_ids: (data.skin_ids as unknown as string[]).join(),
			pack_ids: (data.pack_ids as unknown as string[]).join(),
			body_part_ids: (data.body_part_ids as unknown as string[]).join(),
			image: (data.image as string)[0],
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

		// Si la validation réussie
		//  // console.log(normalizedData);
		// Si le formulaire contient un champs de fichier: envoyer vers l'API un objet de type formData

		const formData = new FormData();
		// Reprendre strictement le nom des champs de formulaire tester sur flashpost
		formData.set("id", normalizedData.id as unknown as string);
		formData.set("name", normalizedData.name as unknown as string);
		formData.set("image", normalizedData.image as unknown as string);
		formData.set(
			"description",
			normalizedData.description as unknown as string,
		);
		formData.set("price", normalizedData.price as unknown as string);
		formData.set(
			"category_id",
			normalizedData.category_id as unknown as string,
		);
		formData.set("skin_ids", normalizedData.skin_ids as unknown as string);
		formData.set(
			"body_part_ids",
			normalizedData.body_part_ids as unknown as string,
		);
		formData.set("pack_ids", normalizedData.pack_ids as unknown as string);

		//console.log(formData);

		// Requête HTTP vers l'API
		const process = dataToUpdate
			? await new ProductApiService().update(formData)
			: await new ProductApiService().insert(formData);

		// Si la requête HTTP à réussie
		/* est ce que le code de status est dans cette liste = different de -1 (-1= absent de la liste)
    useNavigate = on redirige vers une autre page sans click  */
		if ([200, 201].indexOf(process.status) !== -1) {
			navigate("/admin/products");
			// Si la requête HTTP échoue
		} else if ([400].indexOf(process.status) !== -1) {
			// Afficher le message
			setMessage(process.message as unknown as string);
		}
	};

	return (
		<section className={styles.formWrapper}>
			{/* Afficher le message via une condition ternaire*/}
			{message ? <p role="alert">{message}</p> : null}

			{/* onSubmit: evenement javasript
handleSubmit: react hook form
submitForm: fonction que l'on crée*/}
			<form
				className={styles.orientalForm}
				encType="multipart/form-data"
				onSubmit={handleSubmit(submitForm)}
			>
				<div>
					<label htmlFor={nameId}>
						<input
							type="text"
							id={nameId}
							placeholder="Nom"
							{...register("name", {
								required: "Le nom est obligatoire",
								minLength: {
									value: 2,
									message: "Un nom doit comporter au minimum 2 caractères",
								},
								maxLength: {
									value: 50,
									message: "Un nom doit comporté au maximum 50 caracteres",
								},
							})}
						/>
					</label>
					{/* AFFICHER LES MESSAGES D'ERREURS Utiliser le nom de champs définit dans register */}
					<small role="alert">
						{" "}
						{errors.name?.message ?? serverErrors?.name}
					</small>
				</div>

				<div>
					<label htmlFor={imageId}>
						<input
							type="file"
							id={imageId}
							placeholder="Image"
							{...register(
								"image",
								dataToUpdate
									? {}
									: {
											required: "Le nom de l'image est obligatoire",
											minLength: {
												value: 2,
												message:
													"Une image doit comporter au minimum 2 caractères",
											},
											maxLength: {
												value: 50,
												message:
													"Un image peut comporter au maximum 50 caracteres",
											},
										},
							)}
						/>
					</label>
					<small role="alert">
						{" "}
						{errors.image?.message ?? serverErrors?.image}
					</small>
				</div>

				<div>
					<label htmlFor={priceId}>
						{
							<input
								type="text"
								id={priceId}
								placeholder="Prix"
								{...register("price", {
									required: "Le prix est obligatoire",
									min: {
										value: 1,
										message: "Un prix doit comporter au minimum 1 chiffre",
									},
									max: {
										value: 99.99,
										message:
											"Un prix peut comporter au maximum 4 caracteres dont 2 decimales",
									},
								})}
							/>
						}
					</label>
					<small role="alert">
						{" "}
						{errors.price?.message ?? serverErrors?.price}
					</small>
				</div>

				<div>
					<label htmlFor={descriptionId}>
						<textarea
							id={descriptionId}
							placeholder="Décrivez les rituels et les vertus de ce soin..."
							rows={5}
							{...register("description", {
								required: "La description est obligatoire",
								minLength: {
									value: 20,
									message: "Une description doit comporter au minimum 20 ",
								},
							})}
						></textarea>
					</label>
					<small role="alert">
						{" "}
						{errors.description?.message ?? serverErrors?.description}
					</small>
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
					<select
						className={styles.title}
						id={categoryId}
						{...register("category_id", {
							required: "Veuillez selectionner une category",
						})}
					>
						<option value="">-- Choisir une catégorie --</option>
						{categories.map((item) => {
							return (
								<option key={item.id} value={item.id}>
									{" "}
									{item.name}{" "}
								</option>
							);
						})}
					</select>
					<small role="alert">
						{" "}
						{errors.category_id?.message ?? serverErrors?.category_id}
					</small>
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
									{...register("skin_ids", {
										required:
											"Veuillez selectionner un ou plusieurs type de peau",
									})}
								/>
								<small role="alert">
									{" "}
									{errors.skin_ids?.message ?? serverErrors?.skin_ids}
								</small>
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
									{...register("body_part_ids", {
										required:
											"Veuillez selectionner une ou plusieurs zone du corps",
									})}
								/>
								<small role="alert">
									{" "}
									{errors.body_part_ids?.message ?? serverErrors?.body_part_ids}
								</small>
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
									{...register("pack_ids", {
										required: "Veuillez selectionner un ou plusieurs pack",
									})}
								/>
								<small role="alert">
									{" "}
									{errors.pack_ids?.message ?? serverErrors?.pack_ids}
								</small>
								<span>{item.name}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<input type="hidden" id={idId} {...register("id")} />
					<button type="submit">
						{dataToUpdate ? "Modifier produit " : "Créer Produit"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AdminForm;
