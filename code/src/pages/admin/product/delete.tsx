"use client";

import type React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { AdminProductsParams } from "../../../models/params/admin_products_params";
import ProductApiService from "../../../services/product_api_service";
import SecurityService from "../../../services/security_service";

const AdminProductDelete = ({
	params,
}: AdminProductsParams): React.JSX.Element => {
	// Récuperer la variable d'URL
	const { id } = params;

	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// Executer la suppression à l'affichage de la page

	// La methode Then equivaut a Await lorsque les conditions d'await ne sont pas rempli( etre dans une fonction et asynchrone)
	useEffect(() => {
		new ProductApiService()
			.delete({ id: id }, new SecurityService().getToken() as string)
			.then(() => {
				navigate("/admin/products");
				return;
			});
	}, [id, navigate]);

	return (
		<>
			<title> Delete</title>
		</>
	);
};

export default AdminProductDelete;
