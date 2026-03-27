// Reprendre strictement les noms des champs de la collection mongodb
type Contact = {
	_id: string;
	email: string;
	sujet: string;
	message: string;
	date: string;
};

export type { Contact };
