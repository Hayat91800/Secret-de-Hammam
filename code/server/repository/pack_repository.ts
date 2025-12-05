import type { Pack } from "../../models/pack";
import MySQLService from "../service/mysql_service";

class PackRepository {
	// Nom de la table SQL
	private table = "pack";

	// Selectionner tous les enregistrements
	public selectAll = async (): Promise<Pack[] | unknown> => {
		// connexionau server SQL
		const connection = await new MySQLService().connect();

		// requête SQL : SELECT role.* FROM secretsDeHammam_dev.pack;
		const sql = `SELECT ${this.table}.*
                    FROM ${process.env.MYSQL_DATABASE}.${this.table};`;

		// Try / Catch : récuperer les résultats de la reqête ou un erreur
		try {
			// Execution de la requete
			const [query] = await connection.execute(sql);

			// Retourner reultats
			return query;
		} catch (error) {
			return error;
		}
	};

	// Séléctionner un enregistrement
	// data représente une partie des propriété du type
	public selectOne = async (data: Partial<Pack>): Promise<Pack | unknown> => {
		// connexion au server MySQL
		const connection = await new MySQLService().connect();
		// requete SQL
		// where category.id=....
		// SELECT level.* FROM secretsDeHammam_dev;
		// variable de requete : précédée d'un :, suivi du nom de la variable
		// requetes préparées :sécurité;(utilisation des varibales de requetes)la requete est exécutée si elle ne représente pas de risque de sécurité
		const sql = `
		SELECT ${this.table}.*
		FROM ${process.env.MYSQL_DATABASE}.${this.table}
		WHERE ${this.table}.id = :id;
		`;
		// try / catch pour récuperer les resultats de la requete ou une erreur
		try {
			// execution de la requete
			// si la requete possede des variables, utiliser le parametre de la méthode
			const [query] = await connection.execute(sql, data);
			// récuperer le premier indice d'un array
			const result = (query as Pack[]).shift();
			// retourner les résultats
			return result;
		} catch (error) {
			return error;
		}
	};
}

export default PackRepository;
