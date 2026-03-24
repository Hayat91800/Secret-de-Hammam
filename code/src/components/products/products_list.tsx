import { use } from "react";
import type { Product } from "../../../models/product";
import styles from "../../assets/css/products.module.css";
import type { ApiResponse } from "../../models/api_response";
import ProductApiService from "../../services/product_api_service";
import ProductsListItem from "./products_list_item";

const ProductsList = () => {
	// uniquement des composants
	// SEO
	// use : permet de récuperer les donnés d'une promesse dans un composant server de react

	const results = use<ApiResponse<Product[]>>(
		new ProductApiService().selectAll(),
	);

	console.log(results);
	return (
		<section className={styles.productsSection}>
			<h2 className={styles.mainTitle}> Nos Soins Orientaux </h2>

			<div className={styles.productsGrid}>
				{results.data?.map((item) => (
					<ProductsListItem key={item.id} data={item} />
				))}
			</div>
		</section>
	);
};

export default ProductsList;
