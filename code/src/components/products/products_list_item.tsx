import styles from "../../assets/css/products.module.css";
import { Link } from "react-router";
import type { ProductsListItemProps } from "../../models/props/products_list_item_props";

const ProductsListItem = ({ data }: ProductsListItemProps) => {
  return (
    <article className={styles.productCard}>

      <div className={styles.imageWrapper}>
        {/* / cible directement le dossier public */}
        <img src={`/img/${data.image}`} alt={data.name} />
      </div>
      
      <div className={styles.productInfo}>
        <Link to={`/produits/${data.id}`}>
          <h3>{data.name}</h3>
        </Link>

        <p className={styles.price}>{data.price}</p>

        <button className={styles.viewButton}>Découvrir</button>

      </div>

    </article>
  );
};

export default ProductsListItem;
