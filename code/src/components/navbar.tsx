"use client";

import { useState } from "react";
import { NavLink } from "react-router";
import styles from "../assets/css/navbar.module.css";

const NavBar = () => {
	// const navVisible: boolean = false;
	const [navVisible, setNavVisible] = useState<boolean>(false);

	const click = () => setNavVisible(!navVisible);
	// console.log(navVisible)

	return (
		<div className={styles.navContainer}>
			<button type="button" onClick={click}>
				<div
					className={`${styles.line} ${styles.line1} ${navVisible ? styles.one : ""}`}
				></div>
				<div
					className={`${styles.line} ${styles.line2} ${navVisible ? styles.two : ""}`}
				></div>
				<div
					className={`${styles.line} ${styles.line3} ${navVisible ? styles.three : ""}`}
				></div>
			</button>

			<nav
				className={`${styles.navbar} ${navVisible ? "" : styles["nav-visible"]}`}
			>
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
			</nav>
		</div>
	);
};

export default NavBar;
