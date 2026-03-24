import { Link } from "react-router";
import styles from "../../assets/css/products.module.css";
import type { ProductsContentsProps } from "../../models/props/products_contents_props";

// Récupération de la props data envoyé par le parent (page) à l'enfant (composant)
const ProductsContents = ({ data }: ProductsContentsProps) => {
	return (
		<section className={styles.productsSection}>
			<div className={styles.productDetailContainer}>
				<article className={styles.productCard}>
					<div className={styles.imageWrapper}>
						<img src={`/img/products/${data.image}`} alt={data.name} />
					</div>

					<div className={styles.productInfo}>
						<h3>{data.name}</h3>
						<p className={styles.price}>{data.price} €</p>
						<p className={styles.descriptionText}>{data.description}</p>
						<button type="button" className={styles.viewButton}>
							Ajouter au panier
						</button>
						<Link to="/produits">
							<span>Retour aux produits</span>
						</Link>
					</div>

					<div className={styles.Info}></div>
				</article>
			</div>
		</section>
	);
};

export default ProductsContents;
