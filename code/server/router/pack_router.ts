import express from "express";
import PackController from "../controller/pack_controller";

class PackRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new PackController().index);

		// retourner le routeur
		return this.router;
	};
}

export default PackRouter;
