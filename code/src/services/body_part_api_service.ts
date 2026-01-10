import type { Body_part } from "../../models/body_part";
import type { ApiResponse } from "../models/api_response";

class BodyPartApiService {
    // Préfixe de l'API
    private préfix = "/api/body_part";

    // selection de tous les enregistrement
    // On nrecoit une promesse (car mode async) qui est typer: on recoit un type ApiResponse qui est lui même un Array( un type dans un type)
    public selectAll = async () :Promise<ApiResponse<Body_part[]>> => {
        
        // configurer la requête HTTP
        // import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
        const request = new Request(`${import.meta.env.VITE_API_URL}${this.préfix}`);

        // éxecuter la requête HTTP
        const response = await fetch(request);

        // convertir la reponse en JSON en utilisant fonction json: () obligatoire
        // sérialiser: convertir des données complexes (onjet, array) en chaine de caractère
        // désérialiser: convertir une chaine de caractère en données complexes (objet, array...)
        const results = await response.json();

        // retourner le resultat
        return results;

    };

    // Selection d'un enregistrement
     public selectOne = async (id: number) :Promise<ApiResponse<Body_part>> => {
        
        // configurer la requête HTTP
        // import.meta.env permet d'importer une variable d'environnement dans vite/react. Il n'y à pas d'éspace.
        const request = new Request(`${import.meta.env.VITE_API_URL}${this.préfix}/${id}`);

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

export default BodyPartApiService;