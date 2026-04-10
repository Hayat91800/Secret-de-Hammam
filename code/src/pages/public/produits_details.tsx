import { use } from "react";
import type { Product } from "../../../models/product";
import ProductsContents from "../../components/products/products_contents";
import Seo from "../../components/seo";
import type { ProduitsDetailsParams } from "../../models/params/produits_details_params";
import ProductApiService from "../../services/product_api_service";

// param permet de recuperer une variable d'URL
const ProduitsDetails = ({ params }: ProduitsDetailsParams) => {
	// récuperer l'identifiant dans les paramètres
	// déconstrucion d'un objet: permet de créer des variables pour chaque propriété d'un objet
	const { id } = params;

	// Récupération des données
	const result = use(new ProductApiService().selectOne(id));

	// console.log(result);

	return (
		<>
			<Seo
				// ? indique une data optionnelle. Si la data existe il faut typer avec "as",si elle n'existe pas aucune erreur ne s'affichera.
				title={result.data?.name as string}
				description={result.data?.description as string}
				url={`/produits/${id}`}
			/>

			<ProductsContents data={result.data as Product} />
		</>
	);
};

export default ProduitsDetails;
