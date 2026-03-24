import type { Role } from "./role";
import type { Skin } from "./skin";

// Reprendre strictement les noms des colonnes de la table SQL
type User = {
	id: number;
	email: string;
	password: string;

	role_id: number;
	role?: Role;

	skin_id: number;
	skin?: Skin;
};

export type { User };
