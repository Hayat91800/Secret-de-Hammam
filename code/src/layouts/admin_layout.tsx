import "../assets/css/reset.css";
import "../assets/css/base.css";
import styles from "/app/src/assets/css/admin_layout.module.css";
import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";

const AdminLayout = () => {
	return (
	<>
			
			{/* <Lien d'évitement />*/}
		<div className={styles.adminLayout}>
      		<Sidebar />
      		<main className={styles.mainContent}>
        		<Outlet />
      		</main>
		</div>
		</>
	);
};

export default AdminLayout;
