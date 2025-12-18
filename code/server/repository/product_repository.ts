import type { QueryResult } from "mysql2";
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

	// Insérer un enregistrement
	public insert = async (
		data: Partial<Product>,
	): Promise<QueryResult | unknown> => {
		// connexionau server SQL
		const connection = await new MySQLService().connect();

		// requête SQL : SELECT role.* FROM secretsDeHammam_dev.product;
		let sql = `
			INSERT INTO ${process.env.MYSQL_DATABASE}.${this.table}		
            VALUE (
				NULL,
				:name,
				:image,
				:description,
				:price,
				:category_id
			);
		`;

		// Try / Catch : récuperer les résultats de la reqête ou un erreur
		try {
			// Demarrer une transaction
			connection.beginTransaction();

			// Execution de la première requete
			await connection.execute(sql, data);

			// Seconde Requete
			sql = `SET @id = LAST_INSERT_ID();`;
			await connection.execute(sql, data);

			// Troisième requete
			/* 
			1,2,3
				>>>
			INSERT INTO secretsDeHammam_dev.product_pack
			VALUES 
			(1, @id),
			(2, @id),
			(3, @id)
			;

			split: extraire les données d'une chaine de caractères en array
			1,2,3 >>>> [1,2,3]
			map 
				[1,2,3] >> [(1, @id), (2, @id), (3, @id)]
				join 
				[(1, @id), (2, @id), (3, @id)] >> (1, @id), (2, @id), (3, @id)
			 */

			let joinIds = data.skin_ids
				?.split(`,`)
				.map((value) => `(@id, ${value})`)
				.join();

			sql = `
				INSERT INTO
					${process.env.MYSQL_DATABASE}.product_skin
				VALUES
					${joinIds}
				;
			`;

			await connection.execute(sql, data);

			joinIds = data.pack_ids
				?.split(`,`)
				.map((value) => `(@id, ${value})`)
				.join();

			sql = `
				INSERT INTO
					${process.env.MYSQL_DATABASE}.product_pack
				VALUES
					${joinIds}
				;
			`;

			await connection.execute(sql, data);

			joinIds = data.body_part_ids
				?.split(`,`)
				.map((value) => `(@id, ${value})`)
				.join();

			sql = `
				INSERT INTO
					${process.env.MYSQL_DATABASE}.product_body_part
				VALUES
					${joinIds}
				;
			`;

			// query doit etre placer sur la dernière requete
			const [query] = await connection.execute(sql);

			// Valider transaction SQL
			connection.commit();

			// Retourner reultats
			return query;
		} catch (error) {
			// Annuler une transaction
			connection.rollback();

			return error;
		}
	};

	public update = async (
		data: Partial<Product>,
	): Promise<QueryResult | unknown> => {
		// connexionau server SQL
		const connection = await new MySQLService().connect();

		// requête SQL : SELECT role.* FROM secretsDeHammam_dev.product;
		let sql = `
			Update
				${process.env.MYSQL_DATABASE}.${this.table}
 			set
				${this.table}.name = :name,
				${this.table}.image = :image,
				${this.table}.description = :description,
				${this.table}.price = :price,
				${this.table}.category_id = :category_id
 			where
				${this.table}.id = :id;
		`;

		// Try / Catch : récuperer les résultats de la reqête ou un erreur
		try {
			// Demarrer une transaction
			connection.beginTransaction();

			// Execution de la première requete
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
					${process.env.MYSQL_DATABASE}.product_skin
				WHERE
					product_skin.product_id = :id;
				`;
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
					${process.env.MYSQL_DATABASE}.product_pack
				WHERE
					product_pack.product_id = :id;
				`;
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
					${process.env.MYSQL_DATABASE}.product_body_part
				WHERE
					product_body_part.product_id = :id;
				`;
			await connection.execute(sql, data);

			let joinIds = data.skin_ids
				?.split(`,`)
				.map((value) => `(:id, ${value})`)
				.join();

			sql = `
				INSERT INTO
					${process.env.MYSQL_DATABASE}.product_skin
				VALUES
					${joinIds}
				;
			`;

			await connection.execute(sql, data);

			joinIds = data.pack_ids
				?.split(`,`)
				.map((value) => `(:id, ${value})`)
				.join();

			sql = `
				INSERT INTO
					${process.env.MYSQL_DATABASE}.product_pack
				VALUES
					${joinIds}
				;
			`;

			await connection.execute(sql, data);

			joinIds = data.body_part_ids
				?.split(`,`)
				.map((value) => `(:id, ${value})`)
				.join();

			sql = `
				INSERT INTO
					${process.env.MYSQL_DATABASE}.product_body_part
				VALUES
					${joinIds}
				;
			`;

			// // Seconde Requete
			// sql = `
			// 	DELETE FROM
			// 		${process.env.MYSQL_DATABASE}.${this.table}
			// 	WHERE
			// 		${this.table}.id = :id;
			// `;

			// // Seconde Requete
			// sql = `SET @id = LAST_INSERT_ID();`;
			// await connection.execute(sql);

			// Troisième requete
			/* 
			1,2,3
				>>>
			INSERT INTO secretsDeHammam_dev.product_pack
			VALUES 
			(1, @id),
			(2, @id),
			(3, @id)
			;

			split: extraire les données d'une chaine de caractères en array
			1,2,3 >>>> [1,2,3]
			map 
				[1,2,3] >> [(1, @id), (2, @id), (3, @id)]
				join 
				[(1, @id), (2, @id), (3, @id)] >> (1, @id), (2, @id), (3, @id)
			 */

			// const joinIds = data.skin_ids
			// 	?.split(`,`)
			// 	.map((value) => `(@id, ${value})`)
			// 	.join();

			// sql = `
			// 	INSERT INTO
			// 		${process.env.MYSQL_DATABASE}.product_skin
			// 	VALUES
			// 		${joinIds}
			// 	;
			// `;

			// query doit etre placer sur la dernière requete
			const [query] = await connection.execute(sql, data);

			// Valider transaction SQL
			connection.commit();

			// Retourner reultats
			return query;
		} catch (error) {
			// Annuler une transaction
			connection.rollback();

			return error;
		}
	};

	public delete = async (
		data: Partial<Product>,
	): Promise<QueryResult | unknown> => {
		// connexionau server SQL
		const connection = await new MySQLService().connect();

		// requête SQL : SELECT role.* FROM secretsDeHammam_dev.product;
		let sql = `
			DELETE FROM
				${process.env.MYSQL_DATABASE}.product_skin
 			WHERE
				product_skin.product_id = :id;
		`;

		// Try / Catch : récuperer les résultats de la reqête ou un erreur
		try {
			// Demarrer une transaction
			connection.beginTransaction();

			// Execution de la première requete
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
					${process.env.MYSQL_DATABASE}.product_pack
				WHERE
					product_pack.product_id = :id;
				`;
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
					${process.env.MYSQL_DATABASE}.product_body_part
				WHERE
					product_body_part.product_id = :id;
				`;
			await connection.execute(sql, data);

			// // Seconde Requete
			sql = `
				DELETE FROM
					${process.env.MYSQL_DATABASE}.${this.table}
				WHERE
					${this.table}.id = :id;
			`;

			// query doit etre placer sur la dernière requete
			const [query] = await connection.execute(sql, data);

			// Valider transaction SQL
			connection.commit();

			// Retourner reultats
			return query;
		} catch (error) {
			// Annuler une transaction
			connection.rollback();

			return error;
		}
	};
}

export default ProductRepository;
