import { z, type ZodError } from "zod";
import type { Product } from "../../../models/product";

class AdminFormulaireValidator {

    // validation des données du formulaire
    public validate = async (data: Partial<Product>,
    ): Promise<Partial<Product> | ZodError> => {
        // La méthode doit etre executée coté serveur
        "use server";

        // Contraintes de validation
        // Reprendre strictement les propriétés du type à valider
        const constraints = z.object({
            id: z.union([
                z.string().nullable(),
                // coerce : permet de transtyper les donnés (string devient number)
                z.coerce
                    .number()
                    .positive(),
            ]),

            name: z.string("Le nom est obligatoire").min(2, "Un nom doit comporter au minimum 2 caractères").max(50, "Un nom doit comporté au maximum 50 caracteres"),

            image: z.union([
                z.string().nullable(),
                z.file("L'image est obligatoire"),
            ]),
        
            price: z.coerce.number("Le prix est obligatoire").min(1, "Un prix doit comporter au minimum 1 chiffre").max(99.99, "Un prix peut comporter au maximum 4 caracteres dont 2 decimales"),

            description: z.string("La description est obligatoire").min(20, "Une description doit comporter au minimum 20 "),

            category_id: z.coerce.number("Veuillez selectionner une category").positive(),

            skin_ids: z.string("Veuillez selectionner un ou plusieurs type de peau").min(1, "Selectionnez au moins un type de peau"),

            body_part_ids: z.string("Veuillez selectionner une ou plusieurs zone du corps").min(1, "Selectionnez au moins une zone du corps"),

            pack_ids: z.string("Veuillez selectionner une ou plusieurs pack").min(1, "Selectionnez au moins un pack"),
        });

        // Validation de la saisie du formulaire

        const validation = await constraints.safeParseAsync(data);

        // Si la validation échoue
        if (!validation.success) {
            return validation.error;
        }
        // Si la validation réussie
        return validation.data as Partial<Product>;
    };
}

export default AdminFormulaireValidator;