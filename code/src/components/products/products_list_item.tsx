import { Link } from "react-router";
import styles from "../../assets/css/products.module.css";
import type { ProductsListItemProps } from "../../models/props/products_list_item_props";

const ProductsListItem = ({ data }: ProductsListItemProps) => {
	return (
		<article className={styles.productCard}>
			<div className={styles.imageWrapper}>
				{/* / cible directement le dossier public */}
				<img src={`/img/products/${data.image}`} alt={data.name} />
			</div>

			<div className={styles.productInfo}>
				<h3>{data.name}</h3>

				<p className={styles.price}>{data.price} €</p>

				<Link to={`/produits/${data.id}`}>
					<button type="button" className={styles.viewButton}>
						Découvrir
					</button>
				</Link>
			</div>
		</article>
	);
};

export default ProductsListItem;
