import ProductsList from "../../components/products/products_list";
import Seo from "../../components/seo";

const Produits = () => {

	return (
		<>
			<Seo
				title="Produits"
				description="Liste produits proposés"
				url="/produits"
			/>

			<ProductsList/>

		</>
	);
};

export default Produits;
