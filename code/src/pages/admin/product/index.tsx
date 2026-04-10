import { use } from "react";
import { Link, NavLink } from "react-router";
import styles from "../../../assets/css/admin_css/admin_product_index.module.css";
import ProductApiService from "../../../services/product_api_service";

const AdminProductHome = () => {
	const results = use(new ProductApiService().selectAll()).data;

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

			{/* {results?.map((item) => {
                return (
                    <div key={item.id}>
                        <div>
                            <p>{item.id} </p>
                            <p>{item.name} </p>
                        </div>

                        <div className={styles.actions}>
                            <Link to={`/admin/products/add/${item.id}`}>Modifier</Link>
                            <Link to={`/admin/products/add/${item.id}`}>Supprimer</Link>
                        </div>

                    </div>

                )
            })
            } */}

			<section className={styles.tableWrapper}>
				<table className={styles.crudTable}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nom</th>
							<th>Prix</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>
						{results?.map((item) => {
							return (
								<tr key={item.id}>
									<td>#{item.id}</td>
									<td className={styles.productName}>{item.name}</td>
									<td>{item.price} €</td>
									<td>
										<div className={styles.actions}>
											<Link
												to={`/admin/products/add/${item.id}`}
												className={styles.modif}
											>
												Modifier
											</Link>
											<Link
												to={`/admin/products/delete/${item.id}`}
												className={styles.supp}
											>
												Supprimer
											</Link>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
};

export default AdminProductHome;
