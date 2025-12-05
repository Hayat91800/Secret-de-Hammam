import express from "express";
import SkinController from "../controller/skin_controller";

class SkinRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new SkinController().index);

		// variable de route: précédé par :; suivi du nom de la variable
		// appel 1
		this.router.get("/:id", new SkinController().selectOne);

		// retourner le routeur
		return this.router;
	};
}

export default SkinRouter;
