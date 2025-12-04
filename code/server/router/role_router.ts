import express from "express";
import RoleController from "../controller/role_controller";

class RoleRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new RoleController().index);

		// retourner le routeur
		return this.router;
	};
}

export default RoleRouter;
