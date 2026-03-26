import * as jose from "jose";
import type { User } from "../../models/user";

class SecurityService {
	// Propriété qui va stocker l'utilisateur
	// static: lorsque l'on appel l'objet, la propriéte ne change pas
	private static user: User | null;

	// Stocker le JWT token
	private static token: string | null;

	// Déconnexion
	public logout = () => {
		// Supprimer l'utilisateur
		SecurityService.user = null;

		// Supprimer le token
		SecurityService.token = null;
	};

	// getter / setter (accesseur / mutateur)
	// Executer cotes server: use server
	// => : return automatique
	public getUser = (): User | null => {
		"use server";
		return SecurityService.user;
	};

	public setUser = (value: User | null) => {
		"use server";
		SecurityService.user = value;
	};

	public setToken = async (user: User | null) => {
		const secret = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);
		const alg = "HS256";

		if (user) {
			SecurityService.token = await new jose.SignJWT(user as User)
				.setProtectedHeader({ alg })
				// Durée de validité du token (10heures)
				.setExpirationTime("10h")
				.sign(secret);
		}
	};

	public getToken = (): string | null => SecurityService.token;
}

export default SecurityService;
