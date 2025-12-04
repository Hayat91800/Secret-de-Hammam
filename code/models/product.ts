// Reprendre strictement les noms des colonnes de la table SQL
type Product = {
	id: number;
	name: string;
	image: string;
	description: string;
	price: number;
	category_id: number;
};

export type { Product };
