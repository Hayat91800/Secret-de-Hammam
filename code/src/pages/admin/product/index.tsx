"use client";
import { NavLink } from "react-router";
import styles from "../../../assets/css/admin_css/admin_product_index.module.css";

const AdminProductHome = () => {
    // Liste fictive pour la partie "Read" du CRUD
    const products = [
        { id: 1, name: "Huile d'Argan Pure", price: 25, stock: 10 },
        { id: 2, name: "Savon Noir Eucalyptus", price: 12, stock: 50 },
        { id: 3, name: "Eau de Rose", price: 18, stock: 15 },
    ];

    return (
        <div className={styles.crudContainer}>
            <header className={styles.crudHeader}>
                <div>
                    <h1>Gestion des Produits</h1>
                    <p>Consultez et gérez votre catalogue de soins orientaux.</p>
                </div>

                <NavLink to="/admin/products/add" className={styles.addButton}>
                    + Ajouter un produit
                </NavLink>
            </header>

            <section className={styles.tableWrapper}>
                <table className={styles.crudTable}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td>#{p.id}</td>
                                <td className={styles.productName}>{p.name}</td>
                                <td>{p.price} €</td>
                                <td>
                                    <span className={p.stock < 15 ? styles.lowStock : ""}>
                                        {p.stock}
                                    </span>
                                </td>
                                <td>
                                    <div className={styles.actions}>
                                        <button className={styles.editBtn}>Modifier</button>
                                        <button className={styles.deleteBtn}>Supprimer</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default AdminProductHome;