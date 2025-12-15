import express from "express";
import Body_partRouter from "../router/body_part_router";
import CategoryRouter from "../router/category_router";
import HomepageRouter from "../router/homepage_router";
import PackRouter from "../router/pack_router";
import ProductRouter from "../router/product_router";
import RoleRouter from "../router/role_router";
import SkinRouter from "../router/skin_router";
import UserRouter from "../router/user_router";

class Server {
	// Propriétés
	private app = express();
	private router = express.Router();

	// constructor
	constructor() {
		// relier le router à l'application
		this.app.use(this.router);

		// appel des routeurs
		this.routersList();
	}

	// Méthodes
	// listes des routeurs
	private routersList = () => {
		// créer un préfixe à toutes les routes incluses dans un routeur
		this.router.use("/api", new HomepageRouter().getRoutes());
		this.router.use("/api/role", new RoleRouter().getRoutes());
		this.router.use("/api/category", new CategoryRouter().getRoutes());
		this.router.use("/api/skin", new SkinRouter().getRoutes());
		this.router.use("/api/pack", new PackRouter().getRoutes());
		this.router.use("/api/body_part", new Body_partRouter().getRoutes());
		this.router.use("/api/product", new ProductRouter().getRoutes());
		this.router.use("/api/user", new UserRouter().getRoutes());
	};

	// créer méthode pour démarrer le serveur
	public startServer = () => {
		return this.app;
	};
}

export default Server;
