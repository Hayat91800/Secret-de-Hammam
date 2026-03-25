import "../assets/css/reset.css";
import "../assets/css/base.css";
import { Outlet } from "react-router";
import styles from "/app/src/assets/css/admin_layout.module.css";
import Guard from "../components/guard";
import Sidebar from "../components/sidebar";

const AdminLayout = () => {
	return (
		<Guard roles={["admin"]}>
			{/* <Lien d'évitement />*/}
			<div className={styles.adminLayout}>
				<Sidebar />
				<main className={styles.mainContent}>
					<Outlet />
				</main>
			</div>
		</Guard>
	);
};

export default AdminLayout;
