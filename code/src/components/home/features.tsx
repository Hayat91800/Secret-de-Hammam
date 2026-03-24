import styles from "../../assets/css/homepage.module.css";

const Features = () => {
	return (
		<section className={styles.featuresSection}>
			<div className={styles.featureCard}>
				<span className={styles.icon}>🌿</span>
				<h3>100% Naturel</h3>
				<p>Des ingrédients sourcés avec respect, sans additifs chimiques.</p>
			</div>
			<div className={styles.featureCard}>
				<span className={styles.icon}>🏺</span>
				<h3>Savoir-faire</h3>
				<p>
					Des recettes traditionnelles transmises de génération en génération.
				</p>
			</div>

			<div className={styles.featureCard}>
				<span className={styles.icon}>✨</span>
				<h3>Éclat Durable</h3>
				<p>Une efficacité prouvée par les rituels de beauté orientaux.</p>
			</div>
		</section>
	);
};

export default Features;
