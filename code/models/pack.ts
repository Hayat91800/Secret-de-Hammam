import type { Product } from "./product";

// Reprendre strictement les noms des colonnes de la table SQL
type Pack = {
	id: number;
	name: string;
	price: number;

	// liste concaténee des identifiants des produits
	product_ids: string;
	products: Product[];
};

export type { Pack };
