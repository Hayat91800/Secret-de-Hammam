import { FaFacebookSquare } from "react-icons/fa";
import { NavLink } from "react-router";
import styles from "../assets/css/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.logo}>
				<img
					src="/img/logo_secret_de_hammam_1.png"
					alt="Logo Secret de Hammam"
				/>
			</div>
			<div className={styles.nav}>
				<ul className={styles.menu}>
					<li>
						<NavLink to={"/"}> Accueil </NavLink>
					</li>
					<li>
						<NavLink to={"/produits"}> Produits </NavLink>
					</li>
					<li>
						<NavLink to={"/register"}> Inscription </NavLink>
					</li>
					<li>
						<NavLink to={"/login"}> Connexion </NavLink>
					</li>
					<li>
						<NavLink to={"/contact"}> Contact </NavLink>
					</li>
					<li>
						<NavLink to={"/a_propos"}> A propos </NavLink>
					</li>
					<li>
						<NavLink to={"/mentions_legales"}> Mentions légales </NavLink>
					</li>
				</ul>
			</div>
			<div className={styles.icone}>
				<FaFacebookSquare />
			</div>
		</footer>
	);
};

export default Footer;
