import express from "express";
import ContactController from "../controller/contact_controller";

class ContactRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new ContactController().index);
		this.router.post("/", new ContactController().insert);

		// variable de route: précédé par :; suivi du nom de la variable
		// appel 1
		// this.router.get("/:id", new ContactController().selectOne);

		// retourner le routeur
		return this.router;
	};
}

export default ContactRouter;
