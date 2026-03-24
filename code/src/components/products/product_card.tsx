import { Link } from "react-router";
import styles from "../../assets/css/product_card.module.css";
import type { ProductsListItemProps } from "../../models/props/products_list_item_props";

const ProductCard = ({ data }: ProductsListItemProps) => {
	const formattedPrice = data.price ? Number(data.price).toFixed(2) : "0.00";
	return (
		<div className={styles.productCard}>
			<div className={styles.imageContainer}>
				<img src={`/img/products/${data.image}`} alt={data.name} />
			</div>
			<div className={styles.productInfo}>
				<h4>{data.name}</h4>
				<p>{formattedPrice}€</p>
				<Link to={`/produits/${data.id}`} className={styles.productLink}>
					Découvrir
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
