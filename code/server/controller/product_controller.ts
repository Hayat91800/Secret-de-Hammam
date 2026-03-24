import type { Request, Response } from "express";
import ProductRepository from "../repository/product_repository";
import FileService from "../service/file_service";
import type { Product } from "../../models/product";

class ProductController {
	// Méthode relié à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// Récupération des relultats de la rêquete
		const results = await new ProductRepository().selectAll();

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
		const results = await new ProductRepository().selectOne(req.params);
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
			message: "ok product",
			data: results,
		});
	};

	public insert = async (req: Request, res: Response) => {
		// req.files: permet de récuperer les fichiers transferés
		// console.log(req.files);
		// const file = req.files[0];
		const file = (req.files as Express.Multer.File[]).shift() as Express.Multer.File;

		// Instancier le service de fichiers
		const fileService = new FileService();

		// Renommer le fichier transféré et on recupere le nom complet avec extension
		const fullname = await fileService.rename(file);


		// req.body : récupérer les données contenues dans la requête HTTP
		// console.log(req.body);

		// insertion d'un enregistrement
		const results = await new ProductRepository().insert({...req.body, image: fullname,});

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
		res.status(201).json({
			status: 201,
			message: "created product",
			data: results,
		});
	};

	public update = async (req: Request, res: Response) => {
		// req.body : récupérer les données contenues dans la requête HTTP
		// console.log(req.body);
		const file = (req.files as Express.Multer.File[]).shift() as Express.Multer.File;

		// Instancier le service de fichiers
		const fileService = new FileService();


		let fullname: string;

		if (file) {
		// Renommer le fichier transféré et on recupere le nom complet avec extension
		 fullname = await fileService.rename(file);
			
		} else {
		 fullname = (await new ProductRepository().selectOne(req.body) as Product).image;
		}

		console.log(fullname);
		

		// modification d'un enregistrement
		const results = await new ProductRepository().update({...req.body, image: fullname,});
		// console.log(file);
		


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
			message: "update product",
			data: results,
		});
	};

	public delete = async (req: Request, res: Response) => {
		// req.body : récupérer les données contenues dans la requête HTTP
		console.log(req.body);

		// insertion d'un enregistrement
		const results = await new ProductRepository().delete(req.body);

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
		res.status(201).json({
			status: 201,
			message: "delete product",
			data: results,
		});
	};
}

export default ProductController;
