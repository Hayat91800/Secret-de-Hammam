import express from "express";
import multer from "multer";
import ProductController from "../controller/product_controller";

class ProductRouter {
	// router express
	private router = express.Router();

	// multer permet de gérer le transfert de fichier
	private multer = multer({ dest: "public" });

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new ProductController().index);

		// variable de route: précédé par :; suivi du nom de la variable
		// appel 1
		this.router.get("/:id", new ProductController().selectOne);

		// middleware multer
		this.router.post("/", this.multer.any(), new ProductController().insert);

		// retourner le routeur
		return this.router;
	};
}

export default ProductRouter;
