import type { ZodError } from "zod";
import type { Body_part } from "../../../models/body_part";
import type { Category } from "../../../models/category";
import type { Pack } from "../../../models/pack";
import type { Product } from "../../../models/product";
import type { Skin } from "../../../models/skin";

type AdminProductsAddProps = {
    // Reprendre strictement le nom des props définis sur le composant
    categories: Category[];
    skins: Skin[];
    bodyparts: Body_part[];
    packs: Pack[]
    validator: (data: Partial<Product>) => Promise<Partial<Product> | ZodError>;
};



export type { AdminProductsAddProps };