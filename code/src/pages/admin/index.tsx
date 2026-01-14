import styles from "/app/src/assets/css/admin_layout.module.css";

 const AdminHome = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Tableau de bord</h1>
                <p>Bienvenue dans la gestion de votre boutique de soins.</p>
            </header>

            <div className={styles.statsGrid}>
                <div className={styles.card}>
                    <h3>Produits actifs</h3>
                    <p className={styles.number}>24</p>
                </div>
                <div className={styles.card}>
                    <h3>Commandes en cours</h3>
                    <p className={styles.number}>8</p>
                </div>
                <div className={styles.card}>
                    <h3>Chiffre d'affaires</h3>
                    <p className={styles.number}>1 240 €</p>
                </div>
            </div>

            <div className={styles.recentActivity}>
                <h2>Derniers produits ajoutés</h2>
                <ul>
                    <li>Savon noir à l'Eucalyptus - <span className={styles.date}>Il y a 2h</span></li>
                    <li>Huile d'Argan Bio - <span className={styles.date}>Hier</span></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminHome;