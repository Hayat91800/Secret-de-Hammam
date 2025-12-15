import { FaUser } from "react-icons/fa";
import { FaBasketShopping, FaMagnifyingGlass } from "react-icons/fa6";
import styles from "../assets/css/icon_navbar.module.css";

const IconNavbar = () => {
	return (
		<div className={styles.icon_navbar}>
			<FaMagnifyingGlass />
			<FaUser />
			<FaBasketShopping />
		</div>
	);
};

export default IconNavbar;
