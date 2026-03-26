import { Outlet } from "react-router";

const UserLayout = () => {
	return (
		<>
			{/* <Lien d'évitement />*/}
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default UserLayout;
