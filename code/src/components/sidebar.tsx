"use client";
import { NavLink } from "react-router";
import styles from "../assets/css/admin_css/sidebar.module.css";

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.logoSection}>
				<h2>Secret de Hammam</h2>
				<span className={styles.badge}>Admin Panel</span>
			</div>

			<nav className={styles.navLinks}>
				<NavLink
					to="/admin"
					end
					className={({ isActive }) => (isActive ? styles.active : styles.link)}
				>
					Tableau de bord
				</NavLink>

				<NavLink
					to="/admin/products"
					className={({ isActive }) => (isActive ? styles.active : styles.link)}
				>
					Gestion Produits
				</NavLink>

				{/* <NavLink
					to="/admin/orders"
					className={({ isActive }) => (isActive ? styles.active : styles.link)}
				>
					Commandes
				</NavLink> */}

				<NavLink to="/logout" className={styles.exitLink}>
					Quitter l'admin
				</NavLink>
			</nav>
		</aside>
	);
};

export default Sidebar;
