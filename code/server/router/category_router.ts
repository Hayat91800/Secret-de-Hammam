import express from "express";
import CategoryController from "../controller/category_controller";

class CategoryRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new CategoryController().index);

		// variable de route: précédé par :; suivi du nom de la variable
		// appel 1
		this.router.get("/:id", new CategoryController().selectOne);

		// retourner le routeur
		return this.router;
	};
}

export default CategoryRouter;
