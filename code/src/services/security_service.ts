import type { User } from "../../models/user";

class SecurityService {
	// Propriété qui va stocker l'utilisateur
	// static: lorsque l'on appel l'objet, la propriéte ne change pas
	private static user: User | null;

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
}

export default SecurityService;
