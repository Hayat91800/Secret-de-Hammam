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
}

export default PackRepository;
