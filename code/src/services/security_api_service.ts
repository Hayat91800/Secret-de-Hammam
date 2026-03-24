import type { User } from "../../models/user";
import type { ApiResponse } from "../models/api_response";

class SecurityApiService {
	// Préfixe de l'API
	private préfix = "/api";

	// Enregistrer un utilisateur
	public register = async (data: Partial<User>): Promise<ApiResponse<User>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.préfix}/register`,
			// Objet: methode Poste
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
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

	public login = async (data: Partial<User>): Promise<ApiResponse<User>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.préfix}/login`,
			// Objet: methode Poste
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
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

export default SecurityApiService;
