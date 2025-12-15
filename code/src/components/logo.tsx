import styles from "../assets/css/logo.module.css";

const Logo = () => {
	return (
		<div className={styles.logo}>
			<h1>Secret de Hammam</h1>
			<img src="/img/logo_secret_de_hammam_1.png" alt="Logo Secret de Hammam" />
		</div>
	);
};

export default Logo;
