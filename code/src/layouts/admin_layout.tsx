import "../assets/css/reset.css";
import "../assets/css/base.css";
import { Outlet } from "react-router";

const AdminLayout = () => {
	return (
		<>
			<h1> Admin layout</h1>
			<Outlet />
		</>
	);
};

export default AdminLayout;
