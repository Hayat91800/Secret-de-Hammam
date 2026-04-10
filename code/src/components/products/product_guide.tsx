"use client";

import { FaHands, FaLeaf, FaUserCheck } from "react-icons/fa";
import styles from "../../assets/css/product_guide.module.css";
import { PRODUCT_GUIDE_DATA } from "../../constants/product_extra_info"; // Import du dictionnaire

interface ProductGuideProps {
	productId: number;
}

const ProductGuide = ({ productId }: ProductGuideProps) => {
	// On récupère les infos spécifiques ou des valeurs par défaut si l'ID n'existe pas
	const info = PRODUCT_GUIDE_DATA[productId] || {
		production:
			"Méthode artisanale garantissant une qualité supérieure et bio-sourcée.",
		skin_tips: "Convient à tous les types de peaux, même les plus délicates.",
		usage:
			"Usage quotidien. Appliquer sur une peau propre et masser doucement.",
	};

	return (
		<div className={styles.guideCard}>
			<div className={styles.guideHeader}>
				<h4>Guide & Transparence</h4>
				<span className={styles.bioBadge}>Artisanal & Bio</span>
			</div>

			<div className={styles.guideGrid}>
				<article className={styles.guideItem}>
					<div className={styles.iconCircle}>
						<FaHands />
					</div>
					<h5>Savoir-faire</h5>
					<p>{info.production}</p>
				</article>

				<article className={styles.guideItem}>
					<div className={styles.iconCircle}>
						<FaUserCheck />
					</div>
					<h5>Type de peau</h5>
					<p>{info.skin_tips}</p>
				</article>

				<article className={styles.guideItem}>
					<div className={styles.iconCircle}>
						<FaLeaf />
					</div>
					<h5>Utilisation</h5>
					<p>{info.usage}</p>
				</article>
			</div>
		</div>
	);
};

export default ProductGuide;
