import { use } from "react";
import styles from "../../assets/css/featured_products.module.css";
import ProductApiService from "../../services/product_api_service";
import ProductCard from "../products/product_card";

const FeaturedProducts = () => {
	const results = use(new ProductApiService().selectAll()).data;
	// const title = "Séléctionnés pour vous";
	// const subtitle = "Nos Incontournables";

	return (
		<section className={styles.featuredProducts}>
			<div className={styles.sectionHeader}>
				<span>Séléctionnés pour vous</span>
				<h2>Séléctionnés pour vous</h2>
			</div>

			<div className={styles.productGrid}>
				{results?.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
		</section>
	);
};

export default FeaturedProducts;
