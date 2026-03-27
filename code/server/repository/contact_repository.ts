import type { InsertOneResult } from "mongodb";
import MongodbService from "../service/mongodb_service";

class ContactRepository {
	// Nom de la table collection
	private collection = "contact";

	// Selectionner tous les documents
	public selectAll = async (): Promise<Document[] | unknown> => {
		// connexionau server Mongodb
		const connection = await new MongodbService().connect();

		// Selection d'une collection
		const collection = connection?.db().collection(this.collection);

		const results = collection?.find().toArray();

		return results;
	};

	public insert = async (
		data: InsertOneResult,
	): Promise<InsertOneResult | unknown> => {
		// connexionau server Mongodb
		const connection = await new MongodbService().connect();

		// Selection d'une collection
		const collection = connection?.db().collection(this.collection);

		const results = collection?.insertOne(data);

		return results;
	};
}

export default ContactRepository;
