import type { Request, Response } from "express";

class HomepageController {
	// Méthode relié à la route en GET située dans le routeur
	public index = (_req: Request, res: Response) => {
		// renvoyer une reponse avec un code de status HTTP et au format json
		res.status(200).json({
			status: 200,
			message: "OK Role",
		});
	};
}

export default HomepageController;
