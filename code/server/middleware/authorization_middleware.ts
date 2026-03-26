import type { NextFunction, Request, Response } from "express";
import * as jose from "jose";
import type { JWTInvalid } from "jose/errors";
import type { User } from "../../models/user";

class AuthorizationMiddleware {
	// Vérifier le JWT contenu dans l'en tête HTTP Authorization
	public authorize = (roles: string[]) => {
		// Retourner un middleware
		return async (req: Request, res: Response, next: NextFunction) => {
			// récupération du JWT dans l'en-tête authorization
			const token = req.header("authorization")?.split("Bearer ")[1];

			// vérification de la validité du JWT
			try {
				const secret = new TextEncoder().encode(process.env.VITE_JWT_SECRET);
				await jose.jwtVerify(token as string, secret);
			} catch (error) {
				// Si le token est invalide
				res.status(403).json({
					status: 403,
					message:
						process.env.NODE_ENV === `production`
							? `Error`
							: (error as JWTInvalid).code,
				});
				return;
			}

			// Récuperer le payload (charge utile) qui contient les donnés de l'utilisateur

			const payload = jose.decodeJwt(token as string) as User;

			// Si le role n'est pas authorisé
			if (roles.indexOf(payload.role?.name as string) === -1) {
				res.status(401).json({
					status: 401,
					message:
						process.env.NODE_ENV === `production`
							? `Error`
							: "Unauthorized - Role not authorized",
				});
			}
			console.log;

			// Passer au middleware suivant avec la fonction "next"
			next();
		};
	};
}

export default AuthorizationMiddleware;
