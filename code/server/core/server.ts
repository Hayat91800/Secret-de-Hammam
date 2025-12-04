import express from "express";
import HomepageRouter from "../router/homepage_router";
import RoleRouter from "../router/role_router";

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
	};

	// créer méthode pour démarrer le serveur
	public startServer = () => {
		return this.app;
	};
}

export default Server;
