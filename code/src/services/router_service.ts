import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

class RouterService {
	public getRouter = () => {
		return [
			{
				// Identifiant unique de la route
				id: "root",
				// Préfixe des routes
				path: "/",
				// Importation de la mise en page
				lazy: () => import("../layouts/root_layout"),
				children: [
					{
						id: "public",
						path: "",
						lazy: () => import("../layouts/public_layout"),
						children: [
							{
								id: "home",
								index: true,
								path: "",
								lazy: () => import("../pages/index"),
							},
							{
								id: "produits",
								path: "produits",
								lazy: () => import("../pages/produits"),
							},
							{
								id: "register",
								path: "register",
								lazy: () => import("../pages/register"),
							},
							{
								id: "login",
								path: "login",
								lazy: () => import("../pages/login"),
							},
							{
								id: "a_propos",
								path: "a_propos",
								lazy: () => import("../pages/a_propos"),
							},
							{
								id: "contact",
								path: "contact",
								lazy: () => import("../pages/contact"),
							},
							{
								id: "mentions_legales",
								path: "mentions_legales",
								lazy: () => import("../pages/mentions_legales"),
							},
						],
					},
					{
						id: "admin",
						path: "/admin",
						lazy: () => import("../layouts/admin_layout"),
						children: [
							{
								id: "admin-home",
								lazy: () => import("../pages/index"),
							},
						],
					},
					/* 
					{
						id: "about",
						path: "about",
						lazy: () => import("./about/route"),
					},*/
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouterService;
