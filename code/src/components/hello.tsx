import { Fragment } from "react/jsx-runtime";
import styles from "../assets/css/hello.module.css";

// Créer fonction capotaliser car elle va devenir un composant (balise)
const Hello = () => {
	const name = "Hayat";
	const students = ["Hayat", "Laith", "Sabah", "Dominga"];
	const isConnected = true;

	return (
		<div className={styles.hello}>
			<h1 className={styles.title}>Coucou {name}</h1>
			<h2>Hello</h2>
			<hr />
			<img src="/img/vite.svg" alt="" />
			<label htmlFor="tutu">Nom :</label>
			<input type="text" id="tutu" />

			{students.map((value) => (
				<p key={Math.random()}> {value} </p>
			))}

			{isConnected ? `Déconnexion` : `Connexion`}
		</div>
	);
};

export default Hello;
