import styles from "../assets/css/header.module.css";
import IconNavbar from "./icon_navbar";
import Logo from "./logo";
import NavBar from "./navbar";
import ThemeToggle from "./theme_toggle";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.navSide}>
				<NavBar />
			</div>
			<div className={styles.logoSide}>
				<Logo />
			</div>
			<div className={styles.iconSide}>
				<ThemeToggle />
				<IconNavbar />
			</div>
		</header>
	);
};

export default Header;
