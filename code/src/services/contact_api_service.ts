import type { InsertOneResult } from "mongodb";
import type { Contact } from "../../models/contact";
import type { ApiResponse } from "../models/api_response";

class ContactApiService {
	// Préfixe de l'API
	private prefix = "/api/contact";

	// selection de tous les enregistrement
	// On recoit une promesse (car mode async) qui est typer: on recoit un type ApiResponse qui est lui même un Array( un type dans un type)
	public selectAll = async (): Promise<ApiResponse<Contact[]>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
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

	public insert = async (
		data: Contact,
	): Promise<ApiResponse<InsertOneResult>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "post",
				/* Si le formulaire contient un champs de fichier 
                            la propriété body renvoi un objet formData
                            body: data,*/

				/*         
                      Si le formulaire ne contient pas de champs de fichier
                            la propriété body renvoie du JSON : JSON.stringify(...)
                            ajouter l'en-tête Content-Type: application/json */

				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
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
}

export default ContactApiService;
