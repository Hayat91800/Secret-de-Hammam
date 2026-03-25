"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import SecurityService from "../../services/security_service";

const Logout = () => {
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// Supprimer à l'affichage de la page

	useEffect(() => {
		// Supprimer l'utilisateur
		new SecurityService().setUser(null);
		// Redirection de la route
		navigate("/");
	}, [navigate]);

	return <title> Logout</title>;
};

export default Logout;
