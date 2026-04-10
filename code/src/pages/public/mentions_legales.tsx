import { Link, NavLink } from "react-router";
import styles from "../../assets/css/mention_legale.module.css";
import Seo from "../../components/seo";

const MentionsLegales = () => {
	// uniquement des composants
	// SEO

	return (
		<section className={styles.container}>
			<Seo title="Mention légale" description="Mentions legale " url="/" />
			<h1 className={styles.pageTitle}>Informations Légales</h1>

			<div className={styles.contentCard}>
				<h2>Mentions Légales</h2>
				<hr className={styles.divider} />

				<h3>1. Édition du Site</h3>
				<p>
					Le site <strong>Secret de hammam</strong> est édité par{" "}
					<strong>Hayat ZAKHOUKH</strong>.<br />
					Contact: <NavLink to={"/contact"}> Contact </NavLink>
					<br />
					Statut: projet étudiant non commercial
				</p>

				<h3>2. Hébergement</h3>
				<p>
					Ce site est actuellement développé en environnement local. En cas de
					mise en ligne, l’hébergeur sera précisé (ex: Vercel, Netlify, ou
					Hostinger).
				</p>

				<h3>3. Propriété intellectuelle</h3>
				<p>
					L'ensemble des éléments constituant le site Secret de Hammam
					(structure, mise en page, textes, logos, base de données) est la
					propriété exclusive de l'éditeur, sous réserve des droits détenus par
					ses partenaires ou des tiers. Visuels et Images : Les visuels de
					produits et d'ambiance présents sur ce site ont été conçus et générés
					via des outils d'intelligence artificielle (Gemini - Google). Bien que
					l'esthétique ait été créée de manière assistée, l'utilisation, la
					reproduction ou la modification de ces visuels sans autorisation
					préalable de l'éditeur du site est strictement interdite. Droits
					d'auteur : Toute reproduction, représentation, modification,
					publication, adaptation de tout ou partie des éléments du site, quel
					que soit le moyen ou le procédé utilisé, est interdite, sauf
					autorisation écrite préalable. Toute exploitation non autorisée du
					site ou de l’un quelconque des éléments qu’il contient sera considérée
					comme constitutive d’une contrefaçon et poursuivie conformément aux
					dispositions des articles L.335-2 et suivants du Code de Propriété
					Intellectuelle.
				</p>

				<h3>4. Protection des données (RGPD)</h3>
				<p>Conformément au RGPD, nous vous informons que :</p>
				<ul>
					<li>
						<strong>Finalité :</strong> Les données sont collectées pour la
						gestion des comptes clients et l'envoi de newsletters.
					</li>
					<li>
						<strong>Conservation :</strong> Vos données sont conservées pendant
						3 ans après votre dernière activité.
					</li>
					<li>
						<strong>Droits :</strong> Vous pouvez exercer votre droit d'accès,
						de rectification ou de suppression via l'adresse :
						admin@secretdehammam.fr.
					</li>
				</ul>

				<h3>5. Responsabilité</h3>
				<p>
					Secret de Hammam a pour objectif de mettre en avant des rituels de
					soin ancestraux, des produits naturels et des conseils bien-être
					inspirés des traditions orientales. Les informations et conseils
					publiés sur le site sont fournis à titre informatif et ne sauraient en
					aucun cas se substituer à un avis médical ou dermatologique
					professionnel. Malgré le soin apporté à la sélection des ingrédients
					et à la rédaction des fiches produits, l’éditrice ne peut garantir
					l’exactitude, l’exhaustivité ou l’actualité permanente de l’ensemble
					des contenus, notamment concernant les réactions cutanées
					individuelles propres à chaque utilisateur. Le site ne saurait être
					tenu responsable des mauvaises utilisations des produits ou des
					allergies non signalées par l'utilisateur lors de ses interactions
					avec la plateforme.
				</p>

				<h2>Conditions Générales de Vente</h2>
				<hr className={styles.divider} />

				<h3>Paiement Sécurisé</h3>
				<p>
					Dans le cadre de ce projet, aucun paiement réel n'est effectué. Les
					transactions simulées utilisent des environnements de test (type
					Stripe Test Mode).
				</p>

				<h3>Garanties</h3>
				<p>
					Tous nos produits bénéficient de la garantie légale de conformité et
					de la garantie des vices cachés, permettant de renvoyer les produits
					livrés défectueux ou non conformes.
				</p>

				<h3>Livraison</h3>
				<p>
					Nous expédions nos soins sous 48h ouvrés. Les frais de port sont
					calculés lors de la validation du panier et sont offerts dès 50€
					d'achat.
				</p>

				<h3>Retours et Hygiène</h3>
				<p>
					Conformément à la loi, vous disposez de 14 jours pour retourner vos
					produits.
					<strong> Important :</strong> Pour des raisons d'hygiène, seuls les
					produits
					<strong> non ouverts et scellés</strong> seront acceptés en retour.
				</p>

				<h3>Droit de Rétractation</h3>
				<p>
					Conformément à l'article L221-18 du Code de la consommation, vous
					disposez de 14 jours pour changer d'avis.
					<strong> Exception d'hygiène :</strong> Comme indiqué précédemment,
					les produits de soin descellés ne peuvent être retournés pour des
					raisons de protection de la santé.
				</p>

				<h3>Médiation de la consommation</h3>
				<p>
					En cas de litige, et après réclamation écrite restée infructueuse
					auprès de nos services, vous pouvez saisir gratuitement un médiateur
					de la consommation. (Dans le cadre de ce projet, cette mention est
					purement informative).
				</p>

				<Link to="/produits" className={styles.backLink}>
					← Retour à la boutique
				</Link>
			</div>
		</section>
	);
};

export default MentionsLegales;
