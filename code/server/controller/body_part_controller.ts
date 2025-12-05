import type { Request, Response } from "express";
import Body_partRepository from "../repository/body_part_repository";

class Body_PartController {
	// Méthode relié à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// Récupération des relultats de la rêquete
		const results = await new Body_partRepository().selectAll();

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
		console.log(req.params);
		// récupération des resultats de la requete
		const results = await new Body_partRepository().selectOne(req.params);
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
			message: "ok body_part",
			data: results,
		});
	};
}

export default Body_PartController;
