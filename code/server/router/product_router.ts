import express from "express";
import ProductController from "../controller/product_controller";

class ProductRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new ProductController().index);

		// variable de route: précédé par :; suivi du nom de la variable
		// appel 1
		this.router.get("/:id", new ProductController().selectOne);

		// retourner le routeur
		return this.router;
	};
}

export default ProductRouter;
