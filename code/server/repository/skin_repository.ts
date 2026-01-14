import type { Product } from "../../models/product";
import type { Skin } from "../../models/skin";
import MySQLService from "../service/mysql_service";
import ProductRepository from "./product_repository";

class SkinRepository {
	// Nom de la table SQL
	private table = "skin";

	// Selectionner tous les enregistrements
	public selectAll = async (): Promise<Skin[] | unknown> => {
		// connexionau server SQL
		const connection = await new MySQLService().connect();

		/* requête SQL : SELECT role.* FROM secretsDeHammam_dev.skin;
		const sql = `SELECT ${this.table}.*
                    FROM ${process.env.MYSQL_DATABASE}.${this.table};`;
		*/

		// requete SQL
		/*
			SELECT
				skin.*,
					GROUP_CONCAT(product_id) AS product_ids
				FROM 
					secretsDeHammam_dev.skin
				JOIN
					secretsDeHammam_dev.product_skin
				ON
					product_skin.skin_id = skin.id
				JOIN
					secretsDeHammam_dev.product
				ON
					product.id = product_skin.product_id
				GROUP BY
					skin.id ` 
				*/

		const sql = ` 
		SELECT ${this.table}.*, 
	GROUP_CONCAT(product_id) AS product_ids 
	FROM ${process.env.MYSQL_DATABASE}.${this.table}
	JOIN ${process.env.MYSQL_DATABASE}.product_skin 
	ON product_skin.skin_id = ${this.table}.id 
	JOIN ${process.env.MYSQL_DATABASE}.product 
	ON product.id = product_skin.product_id 
	GROUP BY ${this.table}.id ;
			;
			`;

		// Try / Catch : récuperer les résultats de la reqête ou un erreur
		try {
			// Execution de la requete
			const [query] = await connection.execute(sql);

			for (let i = 0; i < (query as Skin[]).length; i++) {
				// Récuperer le resultat
				const result = (query as Skin[])[i] as Skin;

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
	public selectOne = async (data: Partial<Skin>): Promise<Skin | unknown> => {
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
	JOIN ${process.env.MYSQL_DATABASE}.product_skin 
	ON product_skin.skin_id = ${this.table}.id 
	JOIN ${process.env.MYSQL_DATABASE}.product 
	ON product.id = product_skin.product_id 
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
			const result = (query as Skin[]).shift() as Skin;
			result.products = (await new ProductRepository().selectInList(
				result.product_ids,
			)) as Product[];
			// retourner les résultats
			return result;
		} catch (error) {
			return error;
		}
	};

	public selectInList = async (list: string): Promise<Skin[] | unknown> => {
		// connexionau server SQL
		const connection = await new MySQLService().connect();

		// requête SQL : SELECT role.* FROM secretsDeHammam_dev.product;
		const sql = `SELECT ${this.table}.*
                    FROM ${process.env.MYSQL_DATABASE}.${this.table}
					WHERE ${this.table}.id IN (${list})
					;
				`;

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

export default SkinRepository;
