import type { Request, Response } from "express";
import ContactRepository from "../repository/contact_repository";

class ContactController {
	// Méthode relié à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// Récupération des relultats de la rêquete
		const results = await new ContactRepository().selectAll();

		// renvoyer une reponse avec un code de status HTTP et au format json
		res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	};

	public insert = async (req: Request, res: Response) => {
		// Insertion
		const results = await new ContactRepository().insert({
			...req.body,
			date: new Date(),
		});

		// renvoyer une reponse avec un code de status HTTP et au format json
		res.status(201).json({
			status: 201,
			message: "Created",
			data: results,
		});
	};
}

export default ContactController;
