import { MongoClient } from "mongodb";

class MongodbService {
	// Connexion au serveur mongoDB

	public connect = async () => {
		/* 
        Créer une URL de connexion 
        mongodb://USER:PASSWORD@HOST:PORT/DATABASE?authSource=admin
        */

		const url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:27017/${process.env.MONGODB_DATABASE}?authSource=admin`;

		// créer une connexion au serveur MongoDB
		const client = new MongoClient(url);

		try {
			// s'il n'y a pas d'erreur de connexion : retourner la connexion
			return await client.connect();
		} catch (_error) {
			// s'il y a une erreur de connexion : fermer la connexion
			await client.close();
		}
	};
}

export default MongodbService;
