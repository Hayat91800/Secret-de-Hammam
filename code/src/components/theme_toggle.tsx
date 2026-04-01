"use client";

import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [theme, setTheme] = useState("light");

	// Chargement initial (Client uniquement)
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light";
		setTheme(savedTheme);
		document.documentElement.setAttribute("data-theme", savedTheme);
	}, []);

	// Mise à jour lors du changement
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="themeToggle"
			aria-label={`Passer au mode ${theme === "light" ? "sombre" : "clair"}`}
		>
			{theme === "light" ? "🌙" : "☀️"}
		</button>
	);
};

export default ThemeToggle;
