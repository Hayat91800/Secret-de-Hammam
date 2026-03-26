"use client";
import ProfileCard from "../../components/profil_card";
import SecurityService from "../../services/security_service";

const DashboardClient = () => {
	const user = new SecurityService().getUser();

	return (
		<div>
			{" "}
			{/*className={styles.profileContainer}*/}
			<h1>Bienvenue dans votre espace</h1>
			{/* Injection du composant profil si l'utilisateur existe */}
			{user && <ProfileCard user={user} />}
			{/* On peut ajouter d'autres composants ici (Historique, etc.) */}
		</div>
	);
};

export default DashboardClient;
