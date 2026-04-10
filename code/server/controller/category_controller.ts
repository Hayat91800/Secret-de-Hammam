import type { Request, Response } from "express";
import CategoryRepository from "../repository/category_repository";

class CategoryController {
	// Méthode relié à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// Récupération des relultats de la rêquete
		const results = await new CategoryRepository().selectAll();

		// Si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === `production` ? `Error` : results.message,
			});
			return; // Permet de stopper l'execution de la fonction
		}

		// renvoyer une reponse avec un code de status HTTP et au format json
		res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	};

	public selectOne = async (req: Request, res: Response) => {
		// récupérer la variable de route
		// req.params : récupére les variables de route
		// console.log(req.params);
		// récupération des resultats de la requete
		const results = await new CategoryRepository().selectOne(req.params);
		// Si la raquete renvoi une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}
		//    envoyer une réponse
		// res.send("coucou");
		// renvoyer une réponse avec un code de statut  HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "ok category",
			data: results,
		});
	};
}

export default CategoryController;
