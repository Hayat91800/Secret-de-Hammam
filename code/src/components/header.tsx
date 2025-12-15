import styles from "../assets/css/header.module.css";
import IconNavbar from "./icon_navbar";
import Logo from "./logo";
import NavBar from "./navbar";

const Header = () => {
	return (
		<header className={styles.header}>
			<NavBar />
			<Logo />
			<IconNavbar />
		</header>
	);
};

export default Header;
