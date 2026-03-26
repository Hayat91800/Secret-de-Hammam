"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { User } from "../../models/user";
import styles from "../assets/css/form.module.css";
import type { FormProps } from "../models/props/form_props";
import SecurityApiService from "../services/security_api_service";
import SecurityService from "../services/security_service";

const PublicForm = ({ title, buttonText, type }: FormProps) => {
	const emailID = useId();
	const passwordID = useId();

	// useNavigtate hook: permet de créer une redirection
	const navigate = useNavigate();

	// // Stocker les messages d'erreur de validation côté serveur
	// const [serverErrors, setserverErrors] = useState<Partial<User>>();

	// // Message lié à la soumission du formulaire en cas d'echec
	// const [message, setMessage] = useState<string>("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Partial<User>>();

	const submitForm = async (data: Partial<User>) => {
		if (type === "contact") {
		}

		if (type === "register") {
			// console.log(data)
			const process = await new SecurityApiService().register(data);
		}

		if (type === "login") {
			const process = await new SecurityApiService().login(data);
			if ([200, 201].indexOf(process.status) !== -1) {
				const user = process.data as User;

				// Stocker l'utilisateur avec getter/setter de security_service.ts
				new SecurityService().setUser(user);

				// Stocker le token JWT
				await new SecurityService().setToken(user);

				console.log(new SecurityService().getToken());

				// Redirection vers une route react selon le role de l'utilisateur

				if (user.role?.name === "admin") {
					navigate("/admin");
					return;
				}

				if (user.role?.name === "user") {
					navigate("/user");
					return;
				}
				navigate("/");

				// Si la requête HTTP échoue
			}
		}
	};

	return (
		<section className={styles.formWrapper}>
			<h2>{title}</h2>
			<form className={styles.orientalForm} onSubmit={handleSubmit(submitForm)}>
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
						<input
							type="email"
							placeholder="Email"
							{...register("email")}
							required
						/>
						<input
							type="password"
							placeholder="Mot de passe"
							{...register("password")}
							required
						/>
					</>
				)}

				{/* onSubmit: evenement javasript
handleSubmit: react hook form
submitForm: fonction que l'on crée*/}
				{type === "register" && (
					<>
						<input type="email" placeholder="Email" {...register("email")} />
						<input
							type="password"
							placeholder="Mot de passe"
							{...register("password")}
						/>
						{/* <input
							type="password"
							placeholder="Confirmer mot de passe"
						/> */}
					</>
				)}

				<button type="submit">{buttonText}</button>
			</form>

			<div className={styles.formFooter}>
				{type === "login" && <p>Mot de passe oublié ?</p>}
				{type === "register" && (
					<p>En vous inscrivant, vous rejoignez notre rituel de fidélité.</p>
				)}
			</div>
		</section>
	);
};

export default PublicForm;
