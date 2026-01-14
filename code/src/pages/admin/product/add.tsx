import { NavLink } from "react-router";
import styles from "../../../assets/css/admin_css/add.module.css";
import React, { use } from "react";
import CategoryApiService from "../../../services/category_api_service";
import type { Category } from "../../../../models/category";
import AdminForm from "../../../components/admin_formulaire";
import type { Body_part } from "../../../../models/body_part";
import type { Skin } from "../../../../models/skin";
import type { Pack } from "../../../../models/pack";
import SkinApiService from "../../../services/skin_api_service";
import BodyPartApiService from "../../../services/body_part_api_service";
import PackApiService from "../../../services/pack_api_service";
import AdminFormulaireValidator from "../../../validators/admin/admin_formulaire_validator";
import type { AdminProductsParams } from "../../../models/params/admin_products_params";
import type { Product } from "../../../../models/product";
import ProductApiService from "../../../services/product_api_service";

const AddProduct = ({ params }: AdminProductsParams): React.JSX.Element => {
  // console.log(params);

  // Récuperer la variable d'URL
  const { id } = params;
  // console.log(id);

  // Récuperer les donnés à mettre à jour
  let dataToUpdate: Product | undefined;
  // Si un identifiant est présent dans l'URL
  if (id) {
    // La methode Then equivaut a Await lorsque les conditions d'await ne sont pas rempli( etre dans une fonction et asynchrone)
    // new ProductApiService().selectOne(id).then(item => {
    //   dataToUpdate = item.data as Product;
    //   console.log(dataToUpdate);
    // });
    dataToUpdate = use(new ProductApiService().selectOne(id)).data as Product;

  }

  // console.log(dataToUpdate);

  // recuperer les produits
  const categories = use(new CategoryApiService().selectAll()).data as Category[];
  const skins = use(new SkinApiService().selectAll()).data as Skin[];
  const bodyparts = use(new BodyPartApiService().selectAll()).data as Body_part[];
  const packs = use(new PackApiService().selectAll()).data as Pack[];

  return (
    <div className={styles.formContainer}>
      <header className={styles.header}>
        <div>
          <h1>Administration</h1>
          <p>Gestion du catalogue Secret de Hammam</p>
        </div>
        <NavLink to="/admin/products" className={styles.backBtn}>
          Annuler
        </NavLink>
      </header>


      <AdminForm categories={categories} skins={skins} bodyparts={bodyparts} packs={packs}
        validator={new AdminFormulaireValidator().validate} dataToUpdate={dataToUpdate} />



    </div>
  );
};

export default AddProduct;