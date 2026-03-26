import express from "express";
import HomepageController from "../controller/homepage_controller";
import AuthorizationMiddleware from "../middleware/authorization_middleware";

class HomepageRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get(
			"/",
			new AuthorizationMiddleware().authorize(["admin"]),
			new HomepageController().index,
		);

		// retourner le routeur
		return this.router;
	};
}

export default HomepageRouter;
