import styles from "../assets/css/logo.module.css";

const Logo = () => {
	return (
		<div className={styles.logo}>
			<h1>Secret de Hammam</h1>
			<img src="/img/products/logo_ok2.jfif" alt="Logo Secret de Hammam" />
		</div>
	);
};

export default Logo;
