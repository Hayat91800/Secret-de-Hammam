import { Link } from "react-router";
import styles from "../../assets/css/homepage.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroContent}>
				<h2>L'Essence du Rituel Ancestral</h2>
				<p>
					Découvrez des soins purs et naturels pour sublimer votre peau au
					quotidien.
				</p>
				<Link to="/produits" className={styles.ctaButton}>
					Explorer la collection
				</Link>
			</div>
		</section>
	);
};

export default Hero;
