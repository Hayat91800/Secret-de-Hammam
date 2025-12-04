import express from "express";
import SkinController from "../controller/skin_controller";

class SkinRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new SkinController().index);

		// retourner le routeur
		return this.router;
	};
}

export default SkinRouter;
