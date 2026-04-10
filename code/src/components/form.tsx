"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { Contact } from "../../models/contact";
import type { User } from "../../models/user";
import styles from "../assets/css/form.module.css";
import type { FormProps } from "../models/props/form_props";
import SecurityApiService from "../services/security_api_service";
import SecurityService from "../services/security_service";

type FormValues = Partial<User & Contact>;

const PublicForm = ({ title, buttonText, type }: FormProps) => {
	const emailId = useId();
	const passwordId = useId();
	const messageId = useId();
	const sujetId = useId();

	// useNavigtate hook: permet de créer une redirection
	const navigate = useNavigate();

	// Message lié à la soumission du formulaire en cas d'echec
	const [message] = useState<string>("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const submitForm = async (data: FormValues) => {
		if (type === "contact") {
		}

		if (type === "register") {
			// console.log(data)
			const process = await new SecurityApiService().register(data);
			const user = process.data as User;
			if (user.role?.name === "admin") {
				navigate("/login");
				return;
			}

			if (user.role?.name === "user") {
				navigate("/login");
				return;
			}
			navigate("/login");
		}

		if (type === "login") {
			const process = await new SecurityApiService().login(data);
			if ([200, 201].indexOf(process.status) !== -1) {
				const user = process.data as User;

				// Stocker l'utilisateur avec getter/setter de security_service.ts
				new SecurityService().setUser(user);

				// Stocker le token JWT
				await new SecurityService().setToken(user);

				// console.log(new SecurityService().getToken());

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
			{/* Afficher le message via une condition ternaire*/}
			{message ? <p role="alert">{message}</p> : null}
			<h2>{title}</h2>
			<form className={styles.orientalForm} onSubmit={handleSubmit(submitForm)}>
				{/* Rendu conditionnel des champs */}
				{type === "contact" && (
					<>
						<label htmlFor={emailId}>Email</label>
						<input
							type="email"
							id={emailId}
							placeholder="Email"
							{...register("email")}
							required
						/>

						<label htmlFor={sujetId}>Sujet</label>
						<input
							id={sujetId}
							type="text"
							placeholder="Sujet"
							{...register("sujet")}
							required
						/>
						<label htmlFor={messageId}>Message</label>
						<textarea
							id={messageId}
							placeholder="Message"
							{...register("message")}
						></textarea>
					</>
				)}

				{type === "login" && (
					<>
						<label htmlFor={emailId}>Email</label>
						<input
							type="email"
							id={emailId}
							placeholder="Email"
							{...register("email")}
							required
						/>

						<label htmlFor={passwordId}>Password</label>
						<input
							type="password"
							id={passwordId}
							placeholder="Mot de passe"
							{...register("password", {
								required: "Le mot de passe est obligatoire",
								minLength: {
									value: 8,
									message:
										"Un mot de passe doit comporter au minimum 8 caractères",
								},
								maxLength: {
									value: 30,
									message:
										"Un mot de passe doit comporté au maximum 30 caracteres",
								},
							})}
						/>
					</>
				)}

				{/* onSubmit: evenement javasript
handleSubmit: react hook form
submitForm: fonction que l'on crée*/}
				{type === "register" && (
					<>
						<label htmlFor={emailId}>Email</label>
						<input
							type="email"
							id={emailId}
							placeholder="Email"
							{...register("email")}
						/>

						<label htmlFor={passwordId}>
							{" "}
							{
								<input
									type="password"
									id={passwordId}
									placeholder="Mot de passe"
									{...register("password", {
										required: "Le mot de passe est obligatoire",
										minLength: {
											value: 8,
											message:
												"Un mot de passe doit comporter au minimum 8 caractères",
										},
										maxLength: {
											value: 30,
											message:
												"Un mot de passe doit comporté au maximum 30 caracteres",
										},
									})}
								/>
							}
						</label>
						<small role="alert"> {errors.password?.message}</small>
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
