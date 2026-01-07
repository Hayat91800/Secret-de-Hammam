import "../assets/css/reset.css";
import "../assets/css/base.css";
import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../assets/css/public_layout.module.css";

const PublicLayout = () => {
	return (
		<div className={styles.appContainer}>
			<Header />

			<main className={styles.mainContent}>

				{/* <Lien d'évitement />*/}

				<Outlet />

			</main>

			<Footer />

		</div>
	);
};

export default PublicLayout;
