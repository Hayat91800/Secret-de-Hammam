import type { Product } from "./product";

// Reprendre strictement les noms des colonnes de la table SQL
type Body_part = {
	id: number;
	name: string;

	// liste concaténee des identifiants des produits
	body_part_ids: string;
	body_parts: Body_part[];

	product_ids: string;
	products: Product[];
};

export type { Body_part };
