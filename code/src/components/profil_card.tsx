import { NavLink } from "react-router";
import type { User } from "../../models/user";
import styles from "./../assets/css/profil_card.module.css";

interface ProfileCardProps {
	user: User;
}

const ProfileCard = ({ user }: ProfileCardProps) => {
	return (
		<>
			<article className={styles.infoCard}>
				<h3>Mon Profil</h3>
				<div className={styles.infoRow}>
					<span>Email :</span>
					<strong>{user.email}</strong>
				</div>
				<div className={styles.infoRow}>
					<span>Type de peau :</span>
					<strong>{user.skin_id || "Non renseigné"}</strong>
				</div>
			</article>

			<div className={styles.sidebarFooter}>
				<NavLink to="/logout" className={styles.exitLink}>
					Quitter mon espace
				</NavLink>
			</div>
		</>
	);
};

export default ProfileCard;
