"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { GuardProps } from "../models/props/guard_props";
import SecurityService from "../services/security_service";

const Guard = ({ roles, children }: GuardProps) => {
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// Vérifier le role à l'affichage du composant
	useEffect(() => {
		// Recuperer l'utilisateur
		const user = new SecurityService().getUser();
		if (roles.indexOf(user?.role?.name as string) === -1) {
			// redirection vers page react
			navigate("/");
		}
	}, [roles.indexOf, navigate]);
	return <>{children}</>;
};

export default Guard;
