import type { Category } from "../../models/category";
import type { Product } from "../../models/product";
import MySQLService from "../service/mysql_service";
import CategoryRepository from "./category_repository";

class ProductRepository {
	// Nom de la table SQL
	private table = "product";

	// Selectionner tous les enregistrements
	public selectAll = async (): Promise<Product[] | unknown> => {
		// connexionau server SQL
		const connection = await new MySQLService().connect();

		// requête SQL : SELECT role.* FROM secretsDeHammam_dev.product;
		const sql = `SELECT ${this.table}.*
                    FROM ${process.env.MYSQL_DATABASE}.${this.table};`;

		// Try / Catch : récuperer les résultats de la reqête ou un erreur
		try {
			// Execution de la requete
			const [query] = await connection.execute(sql);

			// Boucler sur les resultats pour recuperer les objets en relation (composition en Programmation Orientée Objet)
			for (let i = 0; i < (query as Product[]).length; i++) {
				// Récuperer le resultat
				const result = (query as Product[])[i] as Product;

				// Cles etrangère
				result.category = (await new CategoryRepository().selectOne({
					id: result.category_id,
				})) as Category;
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
		data: Partial<Product>,
	): Promise<Product | unknown> => {
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
			const result = (query as Product[]).shift() as Product;

			// Cles etrangère
			result.category = (await new CategoryRepository().selectOne({
				id: result.category_id,
			})) as Category;

			// retourner les résultats
			return result;
		} catch (error) {
			return error;
		}
	};

	// Selectionner plusieurs éléments dans une liste
	public selectInList = async (list: string): Promise<Product[] | unknown> => {
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

			// Boucler sur les resultats pour recuperer les objets en relation (composition en Programmation Orientée Objet)
			for (let i = 0; i < (query as Product[]).length; i++) {
				// Récuperer le resultat
				const result = (query as Product[])[i] as Product;

				// Cles etrangère
				result.category = (await new CategoryRepository().selectOne({
					id: result.category_id,
				})) as Category;
			}

			// Retourner reultats
			return query;
		} catch (error) {
			return error;
		}
	};
}

export default ProductRepository;
