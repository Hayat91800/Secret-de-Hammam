"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import SecurityService from "../../services/security_service";

const Logout = () => {
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// Supprimer à l'affichage de la page

	useEffect(() => {
		// const reset = async () => {
		// 	//Supprimer l'utilisateur
		// 	new SecurityService().setUser(null);

		//  //Supprimer le token JWT
		// 	await new SecurityService().setToken(null);
		// };

		// reset();

		// Déconnexion
		new SecurityService().logout();

		// Redirection de la route
		navigate("/");
	}, [navigate]);

	return <title> Logout</title>;
};

export default Logout;
