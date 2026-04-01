"use client";

import { useState } from "react";
import { NavLink } from "react-router";
import styles from "../assets/css/navbar.module.css";
import SecurityService from "../services/security_service";

const NavBar = () => {
	// const navVisible: boolean = false;
	const [navVisible, setNavVisible] = useState<boolean>(false);

	const click = () => setNavVisible(!navVisible);

	const closeMenu = () => setNavVisible(false);

	return (
		<div className={styles.navContainer}>
			{/* Afficher l'utilisateur stocké pour phase de test */}
			{JSON.stringify(new SecurityService().getUser())}

			<button type="button" onClick={click} aria-label="Toggle navigation">
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
				className={`${styles.navbar} ${navVisible ? styles["nav-visible"] : ""}`}
			>
				<ul className={styles.menu}>
					<li>
						{" "}
						<NavLink to={"/"} onClick={closeMenu}>
							{" "}
							Accueil{" "}
						</NavLink>{" "}
					</li>
					<li>
						<NavLink to={"/produits"} onClick={closeMenu}>
							{" "}
							Produits{" "}
						</NavLink>
					</li>

					{
						// Si l'utilisateur est connecter
						new SecurityService().getUser() ? (
							<li>
								<NavLink to={"/logout"} onClick={closeMenu}>
									{" "}
									Déconnection{" "}
								</NavLink>{" "}
							</li>
						) : (
							// Si l'utilisateur n'est pas connecté
							<>
								<li>
									{" "}
									<NavLink to={"/register"} onClick={closeMenu}>
										{" "}
										Inscription{" "}
									</NavLink>{" "}
								</li>
								<li>
									{" "}
									<NavLink to={"/login"} onClick={closeMenu}>
										{" "}
										Connexion{" "}
									</NavLink>{" "}
								</li>
							</>
						)
					}

					{
						// Si l'utilisateur est user
						new SecurityService().getUser()?.role?.name === "user" ? (
							<li>
								<NavLink
									to="/user"
									onClick={closeMenu}
									className={styles.adminLink}
								>
									User
								</NavLink>
							</li>
						) : (
							<></>
						)
					}

					{
						// Si l'utilisateur est admin
						new SecurityService().getUser()?.role?.name === "admin" ? (
							<li>
								<NavLink
									to="/admin"
									onClick={closeMenu}
									className={styles.adminLink}
								>
									Admin
								</NavLink>
							</li>
						) : (
							<></>
						)
					}
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
