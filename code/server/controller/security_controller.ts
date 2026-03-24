import argon2 from "argon2";
import type { Request, Response } from "express";
import type { User } from "../../models/user";
import SecurityRepository from "../repository/security_repository";

class SecurityController {
	// Méthode relié à la route en GET située dans le routeur
	public register = async (req: Request, res: Response) => {
		// Récupération des relultats de la rêquete
		// ...: je recupere tout ce qui est dans request.body (clone, copie) puis permet de modifier ce que tu souhaite.
		const results = await new SecurityRepository().register({
			...req.body,
			password: await argon2.hash(req.body.password),
		});

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
		res.status(201).json({
			status: 201,
			message: "Created",
			data: results,
		});
	};

	// Authentifier (connecter) un utilisateur

	public login = async (req: Request, res: Response) => {
		// verifier l'existence de l'email de l'utilisateur
		let results = await new SecurityRepository().isEmailUserExists(req.body);

		// Si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === `production` ? `Error` : results.message,
			});
			return; // Permet de stopper l'execution de la fonction
		}

		// si l'email n'existe pas

		if (!results) {
			res.status(403).json({
				status: 403,
				message:
					process.env.NODE_ENV === `production`
						? `Error`
						: "Forbidden-User email not exists",
			});
			return; // Permet de stopper l'execution de la fonction
		}

		// Récupéré l'utilisateur par son email
		results = await new SecurityRepository().selectOneByEMail(req.body);
		// vérifier si le mot de passe est correct
		// (result as user).password: recupere le mot de passe haché dans la base de donné
		// req.body.password/  recupere le mot de passe en claire dans la raquete
		const passwordIsValid = await argon2.verify(
			(results as User).password,
			req.body.password,
		);

		// Si la requête renvoie une erreur
		if (!passwordIsValid) {
			res.status(401).json({
				status: 401,
				message:
					process.env.NODE_ENV === `production`
						? `Error`
						: "Unauthorized-Ivalid password",
			});
			return; // Permet de stopper l'execution de la fonction
		}

		res.status(200).json({
			status: 200,
			message: "Created",
			data: results,
		});
	};
}

export default SecurityController;
