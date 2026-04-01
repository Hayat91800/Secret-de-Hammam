import { Link } from "react-router";
import styles from "../../assets/css/a_propos.module.css";
import Seo from "../../components/seo";

const APropos = () => {
	return (
		<>
			<Seo
				title="Notre Histoire"
				description="Découvrez l'âme de Secret de Hammam et nos rituels de beauté orientaux."
				url="/a_propos"
			/>

			<section className={styles.productsSection}>
				<h2 className={styles.mainTitle}>Notre Histoire</h2>

				<div className={styles.productDetailContainer}>
					<article className={styles.productCard} style={{ padding: "40px" }}>
						<div className={styles.descriptionText}>
							<h3>L'Éveil des Sens</h3>
							<p>
								<strong>Secret de Hammam</strong> n'est pas seulement une marque
								de soins, c'est une porte ouverte sur un rituel millénaire. Né
								de la volonté de préserver les gestes de beauté transmis de
								génération en génération, notre projet célèbre l'alchimie entre
								la nature généreuse du Maroc et le bien-être de l'esprit.
							</p>

							<h3>Un Savoir-Faire Ancestral</h3>
							<p>
								Chaque flacon raconte une histoire. Celle des coopératives de
								femmes dans la vallée de l'Ourika pour notre{" "}
								<strong>huile d'Argan</strong>, ou celle des jardins de fleurs
								d'oranger dont les effluves embaument les soirées de Marrakech.
								Nous avons sélectionné des ingrédients bruts, extraits avec
								patience pour conserver toutes leurs vertus thérapeutiques.
							</p>

							<h3>Le Rituel à Domicile</h3>
							<p>
								Nous croyons que le soin de soi est une forme d'art. Dans un
								monde qui s'accélère, nous vous proposons de recréer chez vous
								la parenthèse enchantée du hammam : la chaleur de la vapeur,
								l'exfoliation purifiante au savon noir et la douceur d'une huile
								précieuse sur la peau.
							</p>

							<ul>
								<li>
									<strong>Éthique & Pureté :</strong> Des produits sans
									additifs, respectueux de votre peau et de ceux qui les
									produisent.
								</li>
								<li>
									<strong>Héritage Culturel :</strong> La valorisation des
									secrets de beauté de l'Atlas et du Sahara.
								</li>
								<li>
									<strong>Engagement Éco-responsable :</strong> Une sélection
									rigoureuse pour limiter notre empreinte tout en maximisant
									votre bien-être.
								</li>
							</ul>

							<Link to="/produits" className={styles.backLink}>
								← Explorer notre collection de rituels
							</Link>
						</div>
					</article>
				</div>
			</section>
		</>
	);
};

export default APropos;
