import { Link } from "react-router";
import styles from "../../assets/css/products.module.css";

const APropos = () => {
	// uniquement des composants
	// SEO

	return (
		<section className={styles.productsSection}>
			<h2 className={styles.mainTitle}>Notre Histoire</h2>

			<div className={styles.productDetailContainer}>
				{/* On réutilise la carte pour encadrer le texte proprement */}
				<article className={styles.productCard} style={{ padding: "30px" }}>
					<div className={styles.descriptionText}>
						<h3>L'Essence de Secret de hammam</h3>
						<p>
							Né d'une passion pour les rituels ancestraux,{" "}
							<strong>Secret de hammam</strong> est une invitation au voyage et
							à la sérénité. Nous avons puisé au cœur des traditions marocaines
							pour vous offrir une sélection de soins authentiques.
						</p>

						<h3>L'Héritage du Maroc</h3>
						<p>
							Derrière chaque produit se cache un savoir-faire séculaire. De
							l'extraction de l'huile d'Argan dans les coopératives du sud, à la
							récolte de la Figue de Barbarie, nous sélectionnons nos
							ingrédients pour leur pureté absolue.
						</p>

						<ul>
							<li>
								<strong>Authenticité :</strong> Produits sourcés en direct.
							</li>
							<li>
								<strong>Pureté :</strong> Sans additifs superflus.
							</li>
							<li>
								<strong>Bien-être :</strong> L'expérience du hammam à domicile.
							</li>
						</ul>

						<Link to="/produits" className={styles.backLink}>
							← Découvrir la collection
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
};

export default APropos;
