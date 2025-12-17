import type { Category } from "./category";
import type { Skin } from "./skin";

// Reprendre strictement les noms des colonnes de la table SQL
type Product = {
	id: number;
	name: string;
	image: string;
	description: string;
	price: number;

	category: Category;
	category_id: number;

	skin_ids: string;
	skins: Skin[];
};

export type { Product };
