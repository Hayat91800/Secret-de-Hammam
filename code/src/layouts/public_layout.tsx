import "../assets/css/base.css";
import { Outlet } from "react-router";
import styles from "../assets/css/public_layout.module.css";
import Footer from "../components/footer";
import Header from "../components/header";

const PublicLayout = () => {
	return (
		<div className={styles.appContainer}>
			<Header />

			<main id="main-content" className={styles.mainContent} tabIndex={-1}>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default PublicLayout;
