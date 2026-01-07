import type { ProductsContentsProps } from "../../models/props/products_contents_props";

// Récupération de la props data envoyé par le parent (page) à l'enfant (composant)
const ProductsContents = ({data}:ProductsContentsProps) => {
  return (
      <article>
          <h3>{data.name}</h3>
    </article>
  )
}

export default ProductsContents;
