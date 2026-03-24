import express from "express";
import multer from "multer";
import ProductController from "../controller/product_controller";

class ProductRouter {
	// router express
	private router = express.Router();

	// multer permet de gérer le transfert de fichier
	// private multer = multer({ dest: "public" });
	// Si fichier ranger dans sous dossier, modifier le chemin
	private multer = multer({ dest: `${process.env.PUBLIC_DIR}/img/products` });

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new ProductController().index);

		// variable de route: précédé par :; suivi du nom de la variable
		// appel 1
		this.router.get("/:id", new ProductController().selectOne);

		// middleware multer
		// Creation: inserer un enregistrement => Post
		this.router.post("/", this.multer.any(), new ProductController().insert);
		// Modification: mettre à jour un enregistrement => Put
		this.router.put("/", this.multer.any(), new ProductController().update);
		// Supprimer => Delete
		this.router.delete("/", new ProductController().delete);

		// retourner le routeur
		return this.router;
	};
}

export default ProductRouter;
