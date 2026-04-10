// //REPOSITORY

// // sélectionner un enregistrement
// // data représente une partie des propriétés du type
// public
// selectOne = async (data: Partial<Role>): Promise<Role | unknown> => {
// 	// connexion au serveur MySQL
// 	const connection = await new MySQLService().connect(); // requete SQL
// 	// where category.id=....
// 	// SELECT level.* FROM arabizy_dev.level;
// 	// variable de requete : précédée d'un :, suivi du nom de la variable
// 	// requetes préparées :sécurité;(utilisation des varibales de requetes)la requete est exécutée si elle ne représente pas de risque de sécurité
// 	const sql = SELECT;
// 	$;
// 	this.table;
// 	.*
//         FROM $
// 	process.env.MYSQL_DATABASE;
// 	.$
// 	this.table;
// 	where;
// 	$;
// 	this.table;
// 	.id= :id
// 	// try / catch: récupérer les résultats de la requete ou un erreur
// 	try {
// 		// exécution de la requete
// 		// si la requete possède des variables, utiliser le paramètre de la méthode
// 		const [query] = await connection.execute(sql, data);
// 		// récupérer le premier indice d'un array
// 		const result = (query as Role[]).shift();
// 		// retourner les résultats
// 		return result;
// 	} catch (error) {
// 		return error;
// 	}
// };

//                            //controllers;
// public
// selectOne = async (req: Request, res: Response) => {
// 	// récupérer la variable de route
// 	// req.params :rrécupére les variables de route
// 	// console.log(req.params);
// 	// récupération des résultats de la requete
// 	const results = await new RoleRepository().selectOne(req.params);
// 	// si la requete renvoie une erreur
// 	if (results instanceof Error) {
// 		res.status(400).json({
// 			status: 400,
// 			message:
// 				process.env.NODE_ENV === "production" ? "Error" : results.message,
// 		});
// 		return;
// 	}
// 	//    envoyer une réponse
// 	// res.send("coucou");
// 	// renvoyer une réponse avec un code de statut  HTTP et au format JSON
// 	res.status(200).json({
// 		status: 200,
// 		message: "ok level",
// 		data: results,
// 	});
// };

//                                  //router;
// // // variable de route:précédée par un :; suivie du nom de la variable
// // appel 1
// this.router.get("/:id", new RoleController().selectOne);
