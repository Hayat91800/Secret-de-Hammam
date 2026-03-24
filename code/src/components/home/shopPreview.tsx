import { Link } from "react-router";
import styles from "../../assets/css/shop_preview.module.css";

const ShopPreview = () => {
	return (
		<section className={styles.shopPreview}>
			<div className={styles.previewText}>
				<h2>Le Hammam à la Maison</h2>
				<p>
					Savon noir, huile d'argan, gant kessa... Retrouvez tous vos
					indispensables.
				</p>
				<Link to="/produits" className={styles.secondaryLink}>
					Voir tous les produits →
				</Link>
			</div>
		</section>
	);
};

export default ShopPreview;
