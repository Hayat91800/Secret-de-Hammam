import express from "express";
import CategoryController from "../controller/category_controller";

class CategoryRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new CategoryController().index);

		// retourner le routeur
		return this.router;
	};
}

export default CategoryRouter;
