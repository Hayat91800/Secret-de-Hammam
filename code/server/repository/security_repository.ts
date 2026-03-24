import type { QueryResult } from "mysql2";
import type { Role } from "../../models/role";
import type { Skin } from "../../models/skin";
import type { User } from "../../models/user";
import MySQLService from "../service/mysql_service";
import RoleRepository from "./role_repository";
import SkinRepository from "./skin_repository";

class SecurityRepository {
	// Nom de la table SQL
	private table = "user";

	// Enregistrer un utilisateur
	public register = async (
		data: Partial<User>,
	): Promise<QueryResult | unknown> => {
		// connexionau server SQL
		const connection = await new MySQLService().connect();
		// console.log(data);

		// requête SQL : SELECT role.* FROM secretsDeHammam_dev.pack;
		const sql = `
			INSERT INTO ${process.env.MYSQL_DATABASE}.${this.table}		
			VALUE(
				NULL,
				:email,
				:password,
				2,
				NULL
			);
		`;

		// Try / Catch : récuperer les résultats de la reqête ou un erreur
		try {
			// Execution de la requete
			const [query] = await connection.execute(sql, data);

			// Retourner reultats
			return query;
		} catch (error) {
			return error;
		}
	};

	public isEmailUserExists = async (
		data: Partial<User>,
	): Promise<boolean | unknown> => {
		// connexionau server SQL
		const connection = await new MySQLService().connect();

		// requête SQL : SELECT role.* FROM secretsDeHammam_dev.pack;
		const sql = `
			SELECT ${this.table}.*
        FROM ${process.env.MYSQL_DATABASE}.${this.table}
        WHERE ${this.table}.email=:email;
		`;

		// Try / Catch : récuperer les résultats de la reqête ou un erreur
		try {
			// Execution de la requete
			const [query] = await connection.execute(sql, data);

			// Retourner reultats
			// si l'email existe
			if ((query as []).length > 0) return true;
			return false;
		} catch (error) {
			return error;
		}
	};

	// Récuperer un utilisateur par son email

	public selectOneByEMail = async (
		data: Partial<User>,
	): Promise<User | unknown> => {
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
		WHERE ${this.table}.email = :email;
		`;
		// try / catch pour récuperer les resultats de la requete ou une erreur
		try {
			// execution de la requete
			// si la requete possede des variables, utiliser le parametre de la méthode
			const [query] = await connection.execute(sql, data);
			// récuperer le premier indice d'un array
			const result = (query as User[]).shift() as User;
			result.role = (await new RoleRepository().selectOne({
				id: result.role_id,
			})) as Role;

			result.skin = (await new SkinRepository().selectOne({
				id: result.skin_id,
			})) as Skin;
			// retourner les résultats

			return result;
		} catch (error) {
			return error;
		}
	};
}

export default SecurityRepository;
