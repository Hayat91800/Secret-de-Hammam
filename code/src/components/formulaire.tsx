"use client";
import type { FormProps } from "../models/props/form_props";
import styles from "../assets/css/form.module.css";

const Form = ({ title, buttonText, type }: FormProps) => {

  return (
      <section className={styles.formWrapper}>
      <h2>{title}</h2>
          <form className={styles.orientalForm } onSubmit={(e) => e.preventDefault()}>
        
        {/* Rendu conditionnel des champs */}
        {type === "contact" && (
          <>
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Sujet" required />
            <textarea placeholder="Message"></textarea>
          </>
        )}

        {type === "login" && (
          <>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mot de passe" required />
          </>
        )}

        {type === "register" && (
          <>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mot de passe" required />
            <input type="password" placeholder="Confirmer mot de passe" required />
          </>
        )}

        <button type="submit">{buttonText}</button>
        </form>
        
          <div className={styles.formFooter}>
        {type === "login" && <p>Mot de passe oublié ?</p>}
        {type === "register" && <p>En vous inscrivant, vous rejoignez notre rituel de fidélité.</p>}
        </div>
          
    </section>
  );
}

export default Form;