import "../assets/css/reset.css";
import "../assets/css/base.css";
import { Outlet } from "react-router";

const PublicLayout = () => {
	return (
		<>
			<h1> Public layout</h1>
			<Outlet />
		</>
	);
};

export default PublicLayout;
