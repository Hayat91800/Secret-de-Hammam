import "../assets/css/reset.css";
import "../assets/css/base.css";
import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";

const PublicLayout = () => {
	return (
		<>
			<Header />

			{/* <Lien d'évitement />*/}

			<Outlet />

			<Footer />
		</>
	);
};

export default PublicLayout;
