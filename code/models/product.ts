import type { Body_part } from "./body_part";
import type { Category } from "./category";
import type { Pack } from "./pack";
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

	body_part_ids: string;
	body_parts: Body_part[];

	pack_ids: string;
	packs: Pack[];
};

export type { Product };
