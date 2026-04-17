import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router";
// import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "../assets/css/icon_navbar.module.css";

const IconNavbar = () => {
	return (
		<div className={styles.icon_navbar}>
			{/* <FaMagnifyingGlass /> */}
			<NavLink to={"/login"} aria-label="Accéder à la page de connexion">
				<FaUser />
			</NavLink>
		</div>
	);
};

export default IconNavbar;
