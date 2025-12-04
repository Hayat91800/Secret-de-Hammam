import express from "express";
import Body_PartController from "../controller/body_part_controller";

class Body_partRouter {
	// router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// Créer une route en GET simple
		this.router.get("/", new Body_PartController().index);

		// retourner le routeur
		return this.router;
	};
}

export default Body_partRouter;
