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
								lazy: () => import("../pages/public/homepage"),
							},
							{
								id: "produits",
								path: "produits",
								lazy: () => import("../pages/public/produits"),
							},
							{
								id: "produits_details",
								// path représente la route
								// variable d'URL est préfixée d'in :
								path: "produits/:id",
								lazy: () => import("../pages/public/produits_details"),
							},
							{
								id: "register",
								path: "register",
								lazy: () => import("../pages/public/register"),
							},
							{
								id: "login",
								path: "login",
								lazy: () => import("../pages/public/login"),
							},
							{
								id: "a_propos",
								path: "a_propos",
								lazy: () => import("../pages/public/a_propos"),
							},
							{
								id: "contact",
								path: "contact",
								lazy: () => import("../pages/public/contact"),
							},
							{
								id: "mentions_legales",
								path: "mentions_legales",
								lazy: () => import("../pages/public/mentions_legales"),
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
           					 path:"",
            				lazy: () => import("../pages/admin/index"),
        					},
							{
								id: "admin-product",
								path: "products", 
								lazy: () => import("../pages/admin/product/index"),
							},
							{
								id: "add-product",
								// path représente la route
								// variable d'URL est préfixée d'un :
								// variable d'URL optionnelle est suffixée d'un ?
								path: "products/add/:id?", 
								lazy: () => import("../pages/admin/product/add"),
							},
							{
								id: "admin-product-delete",
								path: "products/delete/:id", 
								lazy: () => import("../pages/admin/product/delete"),
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
