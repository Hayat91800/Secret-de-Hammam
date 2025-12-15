import express from "express";
import UserController from "../controller/user_controller";

class UserRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new UserController().index);

		// variable de route: précédé par :; suivi du nom de la variable
		// appel 1
		this.router.get("/:id", new UserController().selectOne);

		// retourner le routeur
		return this.router;
	};
}

export default UserRouter;
