import { Link } from "react-router";
import styles from "../../assets/css/products.module.css";

const MentionsLegales = () => {
	// uniquement des composants
	// SEO

	return (
		<section className={styles.productsSection}>
			<h2 className={styles.mainTitle}>Informations Légales</h2>

			<div className={styles.productDetailContainer}>
				{/* L'utilisation de productCard permet de garder le cadre blanc et l'ombre portée */}
				<article className={styles.productCard} style={{ padding: "30px" }}>
					<div className={styles.descriptionText}>
						<h2>Mentions Légales</h2>
						<hr
							style={{
								border: "0",
								borderTop: "1px solid #f3efe4",
								margin: "20px 0",
							}}
						/>

						<h3>1. Édition du Site</h3>
						<p>
							Le site <strong>Secret de hammam</strong> est édité par [Votre
							Nom/Entreprise], [Forme juridique] au capital de [Montant]€, dont
							le siège social est situé au [Adresse Complète]. Immatriculée au
							RCS sous le numéro SIRET [14 chiffres].
						</p>

						<h3>2. Hébergement</h3>
						<p>
							Ce site est hébergé par la société [Nom de l'hébergeur], située au
							[Adresse de l'hébergeur].
						</p>

						<h3>3. Protection des données (RGPD)</h3>
						<p>
							Les données collectées via le site (email, type de peau) sont
							exclusivement destinées à la gestion de vos commandes et à la
							personnalisation de votre expérience client. Vous disposez d'un
							droit d'accès et de suppression de vos données personnelles.
						</p>

						<br />

						<h2>Conditions Générales de Vente</h2>
						<hr
							style={{
								border: "0",
								borderTop: "1px solid #f3efe4",
								margin: "20px 0",
							}}
						/>

						<h3>Livraison</h3>
						<p>
							Nous expédions nos soins sous [48h] ouvrés. Les frais de port sont
							calculés lors de la validation du panier et sont offerts dès [50€]
							d'achat.
						</p>

						<h3>Retours et Hygiène</h3>
						<p>
							Conformément à la loi, vous disposez de 14 jours pour retourner
							vos produits.
							<strong> Important :</strong> Pour des raisons d'hygiène, seuls
							les produits
							<strong> non ouverts et scellés</strong> seront acceptés en
							retour.
						</p>

						<Link to="/produits" className={styles.backLink}>
							← Retour à la boutique
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
};

export default MentionsLegales;
