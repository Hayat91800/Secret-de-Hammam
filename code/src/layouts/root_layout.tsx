import "../assets/css/base.css";

import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<html lang="fr">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<a href="#main-content" className="skipLink">
					Aller au contenu principal
				</a>
				{/* Zone rempli par un autre contenu */}
				<Outlet />
			</body>
		</html>
	);
};

export default RootLayout;
