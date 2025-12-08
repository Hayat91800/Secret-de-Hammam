import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

class RouterService {
	public getRouter = () => {
		return [
			{
				// Identifiant unique de la route
				id: "root",
				// Préfixe des routes
				path: "",
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
