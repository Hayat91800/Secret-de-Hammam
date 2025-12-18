import type { Body_part } from "../../models/body_part";
import type { Product } from "../../models/product";
import MySQLService from "../service/mysql_service";
import ProductRepository from "./product_repository";

class Body_partRepository {
	// Nom de la table SQL
	private table = "body_part";

	// Selectionner tous les enregistrements
	public selectAll = async (): Promise<Body_part[] | unknown> => {
		// connexionau server SQL
		const connection = await new MySQLService().connect();

		// requête SQL : SELECT role.* FROM secretsDeHammam_dev.body_part;
		/* const sql = `SELECT ${this.table}.*
                    FROM ${process.env.MYSQL_DATABASE}.${this.table};`;
					*/

		// requete SQL
		/*
			SELECT
				body_part.*,
					GROUP_CONCAT(product_id) AS product_ids
				FROM 
					secretsDeHammam_dev.body_part
				JOIN
					secretsDeHammam_dev.product_body_part
				ON
					product_body_part.body_part_id = body_part.id
				JOIN
					secretsDeHammam_dev.product
				ON
					product.id = product_body_part.product_id
				GROUP BY
					body_part.id ` 
				*/

		const sql = ` 
		SELECT ${this.table}.*, 
	GROUP_CONCAT(product_id) AS product_ids 
	FROM ${process.env.MYSQL_DATABASE}.${this.table}
	JOIN ${process.env.MYSQL_DATABASE}.product_body_part 
	ON product_body_part.body_part_id = ${this.table}.id 
	JOIN ${process.env.MYSQL_DATABASE}.product 
	ON product.id = product_body_part.product_id 
	GROUP BY ${this.table}.id ;
			;
			`;

		// Try / Catch : récuperer les résultats de la reqête ou un erreur
		try {
			// Execution de la requete
			const [query] = await connection.execute(sql);

			for (let i = 0; i < (query as Body_part[]).length; i++) {
				// Récuperer le resultat
				const result = (query as Body_part[])[i] as Body_part;

				// tables de jointure
				result.products = (await new ProductRepository().selectInList(
					result.product_ids,
				)) as Product[];
			}

			// Retourner reultats
			return query;
		} catch (error) {
			return error;
		}
	};

	// Séléctionner un enregistrement
	// data représente une partie des propriété du type
	public selectOne = async (
		data: Partial<Body_part>,
	): Promise<Body_part | unknown> => {
		// connexion au server MySQL
		const connection = await new MySQLService().connect();
		// requete SQL
		// where category.id=....
		// SELECT level.* FROM secretsDeHammam_dev;
		// variable de requete : précédée d'un :, suivi du nom de la variable
		// requetes préparées :sécurité;(utilisation des varibales de requetes)la requete est exécutée si elle ne représente pas de risque de sécurité
		// const sql = `
		// SELECT ${this.table}.*
		// FROM ${process.env.MYSQL_DATABASE}.${this.table}
		// WHERE ${this.table}.id = :id;
		// `;

		const sql = ` 
		SELECT ${this.table}.*, 
	GROUP_CONCAT(product_id) AS product_ids 
	FROM ${process.env.MYSQL_DATABASE}.${this.table}
	JOIN ${process.env.MYSQL_DATABASE}.product_body_part 
	ON product_body_part.body_part_id = ${this.table}.id 
	JOIN ${process.env.MYSQL_DATABASE}.product 
	ON product.id = product_body_part.product_id 
	WHERE ${this.table}.id = :id
	GROUP BY ${this.table}.id ;
			;
			`;
		// try / catch pour récuperer les resultats de la requete ou une erreur
		try {
			// execution de la requete
			// si la requete possede des variables, utiliser le parametre de la méthode
			const [query] = await connection.execute(sql, data);
			// récuperer le premier indice d'un array
			const result = (query as Body_part[]).shift() as Body_part;
			result.products = (await new ProductRepository().selectInList(
				result.product_ids,
			)) as Product[];
			// retourner les résultats
			return result;
		} catch (error) {
			return error;
		}
	};
}

export default Body_partRepository;
