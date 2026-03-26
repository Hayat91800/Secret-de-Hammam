import type { Product } from "../../models/product";
import type { ApiResponse } from "../models/api_response";

class ProductApiService {
	// Préfixe de l'API
	private préfix = "/api/product";

	// selection de tous les enregistrement
	// On nrecoit une promesse (car mode async) qui est typer: on recoit un type ApiResponse qui est lui même un Array( un type dans un type)
	public selectAll = async (): Promise<ApiResponse<Product[]>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.préfix}`,
		);

		// éxecuter la requête HTTP
		const response = await fetch(request);

		// convertir la reponse en JSON en utilisant fonction json: () obligatoire
		// sérialiser: convertir des données complexes (objet, array) en chaine de caractère
		// désérialiser: convertir une chaine de caractère en données complexes (objet, array...)
		const results = await response.json();

		// retourner le resultat
		return results;
	};

	// Selection d'un enregistrement
	public selectOne = async (id: number): Promise<ApiResponse<Product>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.préfix}/${id}`,
		);

		// éxecuter la requête HTTP
		const response = await fetch(request);

		// convertir la reponse en JSON en utilisant fonction json: () obligatoire
		// sérialiser: convertir des données complexes (onjet, array) en chaine de caractère
		// désérialiser: convertir une chaine de caractère en données complexes (objet, array...)
		const results = await response.json();

		// retourner le resultat
		return results;
	};

	// Insertion d'un enregistrement
	/* Si le formulaire contient un champ de fichier: utiliser FormData en parametre
        Si le formulaire ne contient pas de champ de gichier: utyliser le stype */
	public insert = async (
		data: FormData,
		token: string,
	): Promise<ApiResponse<Product>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.préfix}`,
			{
				method: "post",
				/* Si le formulaire contient un champs de fichier 
                            la propriété body renvoi un objet formData
                            */
				body: data,

				/*         
                      Si le formulaire ne contient pas de champs de fichier
                            la propriété body renvoir du JSON : JSON.stringify(...)
                            ajouter l'en-tête Content-Type: applicatio,/json

                    body: JSON.stringify(data)
                    headers:{
                            "Content-Type": "application/json",
                            },
                   */

				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		// éxecuter la requête HTTP
		const response = await fetch(request);

		// convertir la reponse en JSON en utilisant fonction json: () obligatoire
		// sérialiser: convertir des données complexes (onjet, array) en chaine de caractère
		// désérialiser: convertir une chaine de caractère en données complexes (objet, array...)
		const results = await response.json();

		// retourner le resultat
		return results;
	};

	// Mise à jour d'un enregistrement
	/* Si le formulaire contient un champ de fichier: utiliser FormData en parametre
        Si le formulaire ne contient pas de champ de gichier: utiliser le stype */
	public update = async (
		data: FormData,
		token: string,
	): Promise<ApiResponse<Product>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.préfix}`,
			{
				method: "put",
				/* Si le formulaire contient un champs de fichier 
                            la propriété body renvoi un objet formData
                            */
				body: data,

				/*         
                      Si le formulaire ne contient pas de champs de fichier
                            la propriété body renvoir du JSON : JSON.stringify(...)
                            ajouter l'en-tête Content-Type: applicatio,/json

                    body: JSON.stringify(data)
                    headers:{
                            "Content-Type": "application/json",
                            },
                   */
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		// éxecuter la requête HTTP
		const response = await fetch(request);

		// convertir la reponse en JSON en utilisant fonction json: () obligatoire
		// sérialiser: convertir des données complexes (onjet, array) en chaine de caractère
		// désérialiser: convertir une chaine de caractère en données complexes (objet, array...)
		const results = await response.json();

		// retourner le resultat
		return results;
	};

	public delete = async (
		data: Partial<Product>,
		token: string,
	): Promise<ApiResponse<Product>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.préfix}`,
			{
				method: "delete",
				/* Si le formulaire contient un champs de fichier 
                            la propriété body renvoi un objet formData
                            
                   body: data */

				/*         
                      Si le formulaire ne contient pas de champs de fichier
                            la propriété body renvoir du JSON : JSON.stringify(...)
                            ajouter l'en-tête Content-Type: applicatio,/json */

				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,

					/* Serialiser = stringify ==> Transformer une donnée complexe (array, objet) en chaîne de caracteres
                            Deserialiser = parse ==> Transformer une chaine de caractere en donnée complexe (array, objet) */
				},
				body: JSON.stringify(data),
			},
		);

		// éxecuter la requête HTTP
		const response = await fetch(request);

		// convertir la reponse en JSON en utilisant fonction json: () obligatoire
		// sérialiser: convertir des données complexes (onjet, array) en chaine de caractère
		// désérialiser: convertir une chaine de caractère en données complexes (objet, array...)
		const results = await response.json();

		// retourner le resultat
		return results;
	};
}

export default ProductApiService;
