import type { Product } from "./product";

// Reprendre strictement les noms des colonnes de la table SQL
type Skin = {
	id: number;
	type: string;

	// liste concaténee des identifiants des produits
	skin_ids: string ;
	skins: Skin[];

	product_ids: string;
	products: Product[];
};

export type { Skin };
