# ANALYSE DU PROJET DWWM

---
### FICHIER : code/src/assets/css/admin_css/add.module.css

```css
/* Conteneur principal pour centrer le formulaire */
.formContainer {
    max-width: 850px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease-in-out;
}

/* En-tête du formulaire */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
}

.header h1 {
    font-family: 'Playfair Display', serif;
    color: #4a3f35;
    margin: 0;
}

.header p {
    color: #8c725b;
    margin: 5px 0 0 0;
    font-style: italic;
}

/* Bouton Retour / Annuler */
.backBtn {
    text-decoration: none;
    color: #8c725b;
    border: 1px solid #eaddca;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    background: white;
}

.backBtn:hover {
    background: #fdf2f2;
    color: #d9534f;
    border-color: #fca5a5;
}

/* Le bloc formulaire */
.productForm {
    background: white;
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #f3efe4;
}

/* Groupes de champs (Label + Input) */
.formGroup {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
}

.formGroup label {
    font-weight: 600;
    color: #645945;
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
}

/* Style des Inputs, Select et Textarea */
.formGroup input, 
.formGroup select, 
.formGroup textarea {
    padding: 12px 15px;
    border: 1px solid #eaddca;
    border-radius: 8px;
    font-size: 1rem;
    color: #4a3f35;
    background-color: #fff;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.formGroup input:focus, 
.formGroup select:focus, 
.formGroup textarea:focus {
    outline: none;
    border-color: #c5a059;
    box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.1);
}

/* Mise en page sur deux colonnes pour Prix et Stock */
.formRow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

/* Bouton de validation final */
.submitBtn {
    width: 100%;
    padding: 15px;
    background-color: #c5a059;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1rem;
    transition: background 0.3s ease, transform 0.2s active;
}

.submitBtn:hover {
    background-color: #a68648;
}

.submitBtn:active {
    transform: scale(0.98);
}

/* Petit effet d'entrée */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Responsive pour les petits écrans */
@media (max-width: 600px) {
    .formRow {
        grid-template-columns: 1fr;
    }
}
```

---
### FICHIER : code/src/assets/css/admin_css/admin_product_index.module.css

```css
.crudContainer {
    padding: 20px;
    max-width: 1200px;
    margin:0 auto;
}

.crudHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
    gap: 20px;
}

.addButton {
    background-color: #645945;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s;
    white-space: nowrap; /*Empeche le texte du bouton de revenir à la ligne*/
    display: inline-block;
}

.addButton:hover {
    background-color: #c5a059;
    transform: translateY(-2px);
}

.tableWrapper {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    overflow-x: auto;
}

.crudTable {
    width: 100%;
    border-collapse: collapse;
}

.crudTable th {
    text-align: left;
    padding: 15px;
    border-bottom: 2px solid #f3efe4;
    color: #8c725b;
}

.crudTable td {
    padding: 15px;
    border-bottom: 1px solid #f3efe4;
}

.productName {
    font-weight: 600;
    color: #8c725b;
}

.actions {
    display: flex;
    gap: 10px;
}

.modif {
    color:  #8c725b;

}

.supp {
    color: red;
}


.editBtn, .deleteBtn {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
}

.editBtn {
    background-color: #eaddca;
    color: #645945;
}

.deleteBtn {
    background-color: #fdf2f2;
    color: #d9534f;
}

.deleteBtn:hover {
    background-color: #d9534f;
    color: white;
}
```

---
### FICHIER : code/src/assets/css/admin_css/sidebar.module.css

```css
*{
    box-sizing: border-box;
}
.sidebar {
    width: 260px;
    height: 100vh;
    background-color: #645945; 
    color: #f3efe4;
    text-decoration: none;
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    padding: 2rem 1rem;
}

.logoSection {
    margin-bottom: 3rem;
    text-align: center;
}

.logoSection h2 {
    color: #c5a059;
    font-family: 'Playfair Display', serif;
    margin: 0;
}

.badge {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #8c725b;
}

.navLinks {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.link, .active {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    text-decoration: none;
    border-radius: 8px;
    transition: 0.3s;
    color: #a89f91;
}

.link:hover {
    background: rgba(197, 160, 89, 0.1);
    color: #c5a059;
}

.active {
    background: #c5a059;
    color: white;
}

.icon {
    margin-right: 12px;
    font-size: 1.2rem;
}

.sidebarFooter {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid #333;
}

.exitLink {
    background-color: #c5a059;
    color: white;
    display: flex; /* Aligne le texte comme les autres liens */
    align-items: center;
    padding: 12px 15px; /* Même espacement interne que .link */
    text-decoration: none;
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    border-radius: 8px;
    transition: 0.3s;
}

.exitLink:hover {
    background-color: #d9534f; /* Devient rouge plein au survol */
    color: white;
 } /* Texte blanc au survol */
```

---
### FICHIER : code/src/assets/css/admin_layout.module.css

```css
/* Container principal */
.container {
    padding: 2rem;
    color: #4a3f35;
    background-color: #fcfaf7;
    min-height: 100%;
}

.adminLayout {
    display: flex;
    width: 100%;
    min-height: 100vh;
}

.mainContent {
    /* Épouse la largeur restante de l'écran */
    flex: 1; 
    
    /* TRÈS IMPORTANT : Pousse le contenu pour qu'il commence 
       après la sidebar qui fait 260px */
    margin-left: 260px; 
    
    background-color: #fcfaf7; /* Fond clair pour le confort visuel */
    padding: 40px;
    box-sizing: border-box;
    min-height: 100vh;
}
/* En-tête de la page */
.header {
    margin-bottom: 3rem;
    border-bottom: 2px solid #eaddca;
    padding-bottom: 1rem;
}

.header h1 {
    font-family: 'Playfair Display', serif; /* Si tu l'as importée, sinon serif */
    font-size: 2.2rem;
    color: #645945;
    margin: 0;
}

.header p {
    font-style: italic;
    color: #8c725b;
}

/* Grille de statistiques (les cartes) */
.statsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.card {
    background: white;
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    border: 1px solid #f3efe4;
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
    border-color: #c5a059;
}

.card h3 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #8c725b;
    margin-bottom: 1rem;
}

.number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #645945;
    margin: 0;
}

.warning {
    color: #b33a3a; /* Pour les alertes de stock */
}

/* Zone d'activité récente */
.recentActivity {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.recentActivity h2 {
    font-size: 1.4rem;
    color: #645945;
    margin-bottom: 1.5rem;
}

.recentActivity ul {
    list-style: none;
    padding: 0;
}

.recentActivity li {
    padding: 1rem 0;
    border-bottom: 1px solid #f3efe4;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.recentActivity li:last-child {
    border-bottom: none;
}

.date {
    font-size: 0.85rem;
    color: #a89f91;
    background: #f3efe4;
    padding: 4px 10px;
    border-radius: 20px;
}

/* Responsive */
@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
    
    .header h1 {
        font-size: 1.8rem;
    }
}
```

---
### FICHIER : code/src/assets/css/base.css

```css
/* Polices */
@font-face {
	font-family: "playfair_display";
	src: url("../polices/PlayfairDisplay-VariableFont_wght.ttf");
}

@font-face {
	font-family: "Poppins";
	src: url("../polices/Poppins-VariableFont_wght.ttf");
}

/* Variables CSS */
:root {
	--color-primary: #645945;
	--color-primary-dark: #040c34;
	--color-secondary: #341967;
	--color-accent: #c5a059;
	--color-neutral-light: #ffffff;
	--color-bg-light: #f3efe4;
	--color-text-dark: #4a3f35;
	--color-border: #eaddca;

	--font-title: "playfair_display", serif;
	--font-subtitle: "Poppins", sans-serif;

	--text-sm: 0.875rem;
	--text-md: 1rem;
	--text-lg: 1.25rem;
	--text-xl: 1.5rem;
	--text-xxl: 2.2rem;
}

/* Balises HTML */
* {
	box-sizing: border-box;
}

img {
	width: 100%;
}

body {
	font-family: var(--font-text);
	background-color: var(--color-bg-light);
	color: var(--color-text-dark);
	line-height: 1.6;
}

```

---
### FICHIER : code/src/assets/css/featured_products.module.css

```css
.featuredProducts {
	max-width: 1200px;
	margin: 100px auto;
	padding: 0 20px;
}

.sectionHeader {
	text-align: center;
	margin-bottom: 60px;
}

.sectionHeader span {
	color: #c5a059;
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: 0.85rem;
	font-weight: 700;
	display: block;
	margin-bottom: 10px;
}

.sectionHeader h2 {
	font-family: "Playfair Display", serif;
	color: #645945;
	font-size: 2.8rem;
	margin: 0;
}

.productGrid {
	display: grid;
	/* Création automatique de colonnes : minimum 280px par carte */
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 50px 30px; /* 50px d'espace vertical, 30px horizontal */
}

/* Version Tablette / Mobile */
@media (max-width: 768px) {
	.sectionHeader h2 {
		font-size: 2rem;
	}
	.featuredProducts {
		margin: 60px auto;
	}
}

```

---
### FICHIER : code/src/assets/css/features.module.css

```css
.featuresSection {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 30px;
	max-width: 1200px;
	margin: -50px auto 80px;
	position: relative;
	z-index: 10;
	padding: 0 20px;
}

.featureCard {
	background: white;
	padding: 40px;
	border-radius: 20px;
	text-align: center;
	box-shadow: 0 20px 40px rgba(100, 89, 69, 0.1);
	transition:
		transform 0.4s ease,
		box-shadow 0.4s ease;
}

.featureCard:hover {
	transform: translateY(-8px);
	box-shadow: 0 30px 60px rgba(100, 89, 69, 0.15);
}

.icon {
	font-size: 2.5rem;
	display: block;
	margin-bottom: 15px;
}

.featureCard h3 {
	font-family: "Playfair Display", serif;
	color: #645945;
	margin-bottom: 10px;
}

.featureCard p {
	font-weight: 300;
	color: #8a7d6a;
	font-size: 0.95rem;
	margin: 0;
}

@media (max-width: 768px) {
	.featuresSection {
		margin: -30px auto 40px;
		grid-template-columns: 1fr;
	}
}

```

---
### FICHIER : code/src/assets/css/footer.module.css

```css
.footer {
    background-color: #645945;
    color: #f3efe4;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 50px; /* Espace avec le contenu de la page */
}

/* Logo */
.logo {
    width: 100px;
    transition: transform 0.3s ease;
}

.logo img {
    width: 100%;
    height: auto;
    filter: brightness(0) invert(1); /* Rend le logo blanc pour ressortir sur le marron */
}

.logo:hover {
    transform: scale(1.05);
}

/* Navigation */
.nav {
    width: 100%;
}

.menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap; /* Pour mobile : les liens passent à la ligne */
    justify-content: center;
    gap: 20px;
}

.menu li a {
    color: #f3efe4;
    text-decoration: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s ease;
}

.menu li a:hover {
    color: #c5a059;
}

/* Icône Sociale */
.icone {
    font-size: 1.8rem;
    color: #f3efe4;
    cursor: pointer;
    transition: all 0.3s ease;
}

.icone:hover {
    color: #c5a059;
    transform: translateY(-3px);
}

/* Responsive Ordinateur */
@media (min-width: 768px) {
    .footer {
        flex-direction: row;
        justify-content: space-between;
        padding: 40px 60px;
    }

    .menu {
        gap: 30px;
    }

    .nav {
        width: auto;
    }
}
```

---
### FICHIER : code/src/assets/css/form.module.css

```css
.formWrapper {
  max-width: 500px;
  margin: 60px auto;
  padding: 40px;
  background: #ffffff;
  border-radius: 20px;
  /* Ombre douce pour un effet aérien */
  box-shadow: 0 15px 35px rgba(140, 114, 91, 0.1);
  border: 1px solid rgba(197, 160, 89, 0.1);
  position: relative;
  overflow: hidden;
}

/* Petit motif floral ou organique en fond (optionnel) */
.formWrapper::after {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: rgba(197, 160, 89, 0.05);
  border-radius: 50%;
}

.formWrapper h2 {
  font-family: 'Playfair Display', serif;
  color: #5d6d5e; /* Vert sauge profond */
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 600;
}

.orientalForm {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Style des labels s'ils sont ajoutés, ou placeholder */
.orientalForm input, 
.orientalForm textarea {
  font-family: 'Poppins', sans-serif;
  width: 100%;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #faf9f7; /* Couleur sable très clair */
  font-size: 0.95rem;
  transition: all 0.4s ease;
  color: #4a4a4a;
}

.orientalForm input:focus, 
.orientalForm textarea:focus {
  border-color: #c5a059; /* Or brossé */
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(197, 160, 89, 0.1);
  outline: none;
}

/* Style spécifique pour le bouton "Rituel de Beauté" */
.orientalForm button {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #8c725b 0%, #a68b74 100%);
  color: white;
  padding: 16px;
  border: none;
  border-radius: 50px; /* Bouton arrondi pour la douceur */
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 10px;
}

.orientalForm button:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 20px rgba(140, 114, 91, 0.3);
}

/* Texte d'aide ou liens sous le formulaire */
.formFooter {
  text-align: center;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  color: #8c725b;
}




/*TEMPORAIRE*/

.groupTitle {
  font-family: 'Playfair Display', serif;
  font-size: 0.85rem;
  color: #8c725b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

/* Style spécifique pour le SELECT dans le formGroup */
.formGroup select {
  width: 100%;
  border: none;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #4a4a4a;
  cursor: pointer;
  outline: none;
  padding: 5px 0;
}

/* Conteneur pour aligner les checkbox proprement */
.checkboxGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  padding-top: 5px;
}

/* Style de chaque ligne de checkbox */
.checkboxItem {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #4a4a4a;
  transition: color 0.2s;
}

.checkboxItem:hover {
  color: #c5a059;
}

.checkboxItem input[type="checkbox"] {
  width: auto; /* Empêche la checkbox de prendre 100% de largeur */
  accent-color: #c5a059; /* Colore la case en doré */
  cursor: pointer;
}

```

---
### FICHIER : code/src/assets/css/header.module.css

```css
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 40px;
	background-color: #ffffff;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	position: sticky;
	top: 0;
	z-index: 1000;

}

h1 {
	display: none;
}

/* RESPONSIVE ECRAN ORDINATEUR
@media only screen and (min-width: 769px) {
	.header {
	}
} */

```

---
### FICHIER : code/src/assets/css/hero.module.css

```css
.hero {
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background:
		linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
		url("/img/products/Hammam.png") center / cover no-repeat;
	color: #645945;
	text-align: center;
	border-radius: 0 0 40px 40px;
}

.heroContent {
	color: white;
	max-width: 800px;
	padding: 20px;
	position: relative;
	z-index: 5;
}

.heroContent h2 {
	font-family: "Playfair Display", serif;
	font-size: 4rem;
	font-weight: 700;
	margin-bottom: 25px;
	letter-spacing: 2px;
	line-height: 1.1;
	text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
}

.heroContent p {
	font-size: 1.2rem;
	font-weight: 300;
	line-height: 1.8;
	margin-bottom: 45px;
	max-width: 650px;
	margin: 0 auto 45px;
	color: rgba(255, 255, 255, 0.9);
}

.ctaButton {
	background-color: #c5a059;
	color: white;
	padding: 15px 40px;
	border-radius: 50px;
	text-decoration: none;
	font-weight: bold;
	display: inline-block;
	transition: 0.3s ease;
}

.ctaButton:hover {
	background-color: white;
	color: #c5a059;
}

@media (max-width: 768px) {
	.hero {
		height: 70vh;
		border-radius: 0 0 30px 30px;
	}
	.heroContent h2 {
		font-size: 2.2rem;
	}
}

```

---
### FICHIER : code/src/assets/css/homepage.module.css

```css
.homeWrapper {
	background-color: #fffdf9;
}

.hero {
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background:
		linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
		url("/img/products/Hammam.png") center / cover no-repeat;
	color: #645945;
	text-align: center;
	border-radius: 0 0 40px 40px;
	margin-bottom: 0;
}

.heroContent {
	color: white;
	max-width: 800px;
	padding: 20px;
	position: relative;
	z-index: 5;
}

.heroContent h2 {
	font-family: "Playfair Display", serif;
	font-size: 4rem;
	font-weight: 700;
	margin-bottom: 25px;
	letter-spacing: 2px;
	line-height: 1.1;
	text-align: center;
	text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
}

.heroContent p {
	font-size: 1.2rem;
	font-weight: 300;
	line-height: 1.8;
	margin-bottom: 45px;
	max-width: 650px;
	margin-left: auto;
	margin-right: auto;
	color: rgba(255, 255, 255, 0.9);
}

.ctaButton {
	background-color: #c5a059;
	color: white;
	padding: 15px 40px;
	border-radius: 50px;
	text-decoration: none;
	font-weight: bold;
	display: inline-block;
	transition: 0.3s ease;
}

.ctaButton:hover {
	background-color: white;
}

.featuresSection {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 30px;
	max-width: 1200px;
	margin: -50px auto 80px;
	position: relative;
	z-index: 10;
	padding: 0 20px;
}

.featureCard {
	background: white;
	padding: 40px;
	border-radius: 20px;
	text-align: center;
	box-shadow: 0 20px 40px rgba(100, 89, 69, 0.1);
	transition:
		transform 0.4s ease,
		box-shadow 0.4s ease;
	position: relative;
	z-index: 10;
}

.featureCard p {
	font-weight: 300;
	color: #8a7d6a;
	font-size: 0.95rem;
}

.featureCard:hover {
	transform: translateY(-8px);
	box-shadow: 0 30px 60px rgba(100, 89, 69, 0.15);
}

.icon {
	font-size: 2.5rem;
	display: block;
	margin-bottom: 15px;
}

.featureCard h3 {
	font-family: "Playfair Display", serif;
	color: #645945;
	margin-bottom: 10px;
}

.shopPreview {
	padding: 100px 20px;
	text-align: center;
	background-color: #f3efe4;
}

.secondaryLink {
	color: #645945;
	text-decoration: none;
	font-weight: bold;
	border-bottom: 2px solid #c5a059;
	padding-bottom: 5px;
}

.featuredProducts {
    max-width: 1200px;
    margin: 100px auto;
    padding: 0 20px;
}

.sectionHeader {
    text-align: center;
    margin-bottom: 60px;
}

.sectionHeader span {
    color: #c5a059;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.9rem;
    font-weight: bold;
}

.sectionHeader h2 {
    font-family: "Playfair Display", serif;
    color: #645945;
    font-size: 2.5rem;
    margin-top: 10px;
}

.productGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.productCard {
    text-align: center;
    transition: 0.3s;
}

.imageContainer {
    background-color: #f9f6f0;
    border-radius: 15px;
    padding: 40px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
}

.imageContainer img {
    width: 100%;
    height: 300px;
    object-fit: contain; /* Garde les proportions du flacon/produit */
    transition: transform 0.5s ease;
}

.productCard:hover img {
    transform: scale(1.05);
}

.badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: #645945;
    color: white;
    padding: 5px 12px;
    font-size: 0.7rem;
    border-radius: 20px;
    text-transform: uppercase;
}

.productCard h4 {
    font-family: "Playfair Display", serif;
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 8px;
}

.productCard p {
    color: #8a7d6a;
    font-weight: 300;
    margin-bottom: 20px;
}

.productLink {
    text-decoration: none;
    color: #c5a059;
    font-weight: bold;
    border-bottom: 1px solid transparent;
    transition: 0.3s;
}

.productLink:hover {
    border-bottom: 1px solid #c5a059;
}

@media (max-width: 768px) {
	.hero {
		height: 70vh;
		border-radius: 0 0 30px 30px;
	}

	.heroContent h2 {
		font-size: 2.2rem;
		padding: 0 10px;
	}

	.heroContent p {
		font-size: 1rem;
		margin-bottom: 30px;
		padding: 0 15px;
	}

	.featuresSection {
		margin: -30px auto 40px;
		grid-template-columns: 1fr;
		gap: 20px;
	}

	.featureCard {
		padding: 30px 20px;
	}
}

```

---
### FICHIER : code/src/assets/css/icon_navbar.module.css

```css
.icon_navbar {
    display: flex;
    gap: 20px;
    align-items: center;
    color: #645945;
}

.icon_navbar svg {
    font-size: 1.3rem;
    cursor: pointer;
    transition: color 0.3s;
}

.icon_navbar svg:hover {
    color: #c5a059;
}
```

---
### FICHIER : code/src/assets/css/logo.module.css

```css
.logo {
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: 50px;
	transition: transform 0.3s ease;
}

.logo img {
	width: auto;
	height: 100%;
	display: block;
	object-fit: contain;
}

.logo h1 {
	display: none;
}

```

---
### FICHIER : code/src/assets/css/mention_legale.module.css

```css
.container {
	padding: 60px 20px;
	max-width: 900px;
	margin: 0 auto;
}

.pageTitle {
	text-align: center;
	font-family: "Playfair Display", serif;
	color: #645945;
	font-size: 2.5rem;
	margin-bottom: 40px;
}

.pageTitle::after {
	content: "";
	display: block;
	width: 60px;
	height: 3px;
	background: #c5a059;
	margin: 15px auto;
}

.contentCard {
	background: white;
	border-radius: 20px;
	padding: 40px;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
	color: #4a3f35;
	line-height: 1.8;
}

.contentCard h2 {
	font-family: "Playfair Display", serif;
	color: #645945;
	font-size: 1.8rem;
	margin: 30px 0 15px 0;
	border-bottom: 1px solid #f3efe4;
	padding-bottom: 10px;
}

.contentCard h3 {
	font-family: "Playfair Display", serif;
	color: #c5a059;
	font-size: 1.3rem;
	margin-top: 25px;
	margin-bottom: 10px;
}

.contentCard p {
	margin-bottom: 20px;
	font-size: 1rem;
}

.contentCard strong {
	color: #645945;
	font-weight: 600;
}

.divider {
	border: 0;
	border-top: 1px solid #f3efe4;
	margin: 30px 0;
}

.backLink {
	display: inline-block;
	margin-top: 30px;
	color: #645945;
	text-decoration: none;
	font-weight: bold;
	transition: color 0.3s;
}

.backLink:hover {
	color: #c5a059;
}

@media (max-width: 768px) {
	.contentCard {
		padding: 20px;
	}
	.pageTitle {
		font-size: 2rem;
	}
}

.contentCard ul {
	list-style: none;
	padding-left: 0;
	margin: 20px 0;
}

.contentCard li {
	position: relative;
	padding-left: 25px;
	margin-bottom: 12px;
}

.contentCard li::before {
	content: "◈";
	position: absolute;
	left: 0;
	color: #c5a059;
}

```

---
### FICHIER : code/src/assets/css/navbar.module.css

```css
/* Polices */

/* Variables CSS */

/* Balises HTML */
/* MOBILE FIRST */

* {
	box-sizing: border-box;
}

.navContainer {
	display: flex;
	align-items: center;
}

.navContainer button {
	display: flex;
	flex-direction: column;
	gap: 0.35rem;
	background: none;
	border: none;
	cursor: pointer;
	padding: 10px;
	z-index: 1100;
}

.line {
	width: 1.8rem;
	height: 2px;
	background-color: #645945;
	transition:
		transform 0.3s ease,
		opacity 0.3s ease;
}

.one {
	transform-origin: left top;
	transform: rotate(45deg) translate(0px, -3px);
}
.two {
	opacity: 0;
}
.three {
	transform-origin: left bottom;
	transform: rotate(-45deg) translate(0px, 3px);
}

.navbar {
	position: fixed;
    top: 125px;
    left: 0;
    width: 250px;
    height: calc(100vh-125px);
    background-color: #645945;
    transition: transform 0.4s ease;
    z-index: 1050;
    box-shadow: 5px 0 15px rgba(0,0,0,0.1);
}

.nav-visible {
	transform: translateX(-100%);
}

.menu li a {
    display: block;
    padding: 15px 30px;
    color: #f3efe4;
    text-decoration: none;
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    transition: all 0.3s;
}

.menu li a:hover {
    background-color: rgba(197, 160, 89, 0.2);
    color: #c5a059;
    padding-left: 40px;
}

.adminLink {
    margin-top: 20px;
    border-top: 1px solid rgba(243, 239, 228, 0.2);
    font-weight: bold;
    color: #c5a059 !important;
}
```

---
### FICHIER : code/src/assets/css/product_card.module.css

```css
.productCard {
	display: flex;
	flex-direction: column;
	text-align: center;
	transition: transform 0.3s ease;
}

.imageContainer {
	background-color: #fcfaf7; /* Fond crème très doux  */
	border-radius: 20px;
	margin-bottom: 20px;
	position: relative;
	overflow: hidden;
	aspect-ratio: 1 / 1; /* Force un carré parfait pour l'unité visuelle */
	display: flex;
	align-items: center;
	justify-content: center;
}

.imageContainer img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
}

/* Effet au survol de la carte */
.productCard:hover .imageContainer img {
	transform: scale(1.1);
}

.productInfo h4 {
	font-family: "Playfair Display", serif;
	font-size: 1.25rem;
	color: #2d2d2d;
	margin: 0 0 8px 0;
}

.productInfo p {
	color: #8a7d6a;
	font-weight: 300;
	font-size: 0.95rem;
	margin-bottom: 15px;
}

.productLink {
	text-decoration: none;
	color: #c5a059;
	font-weight: 700;
	font-size: 0.9rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	display: inline-block;
	transition: color 0.3s ease;
}

.productLink:hover {
	color: #645945;
}

```

---
### FICHIER : code/src/assets/css/product_skeleton.module.css

```css
/* src/components/products/product_skeleton.module.css */
.skeletonCard {
	background: #fdfcf9;
	border-radius: 8px;
	overflow: hidden;
	border: 1px solid #eee;
}

.skeletonImage {
	width: 100%;
	height: 200px;
	background: #e0e0e0;
}

.skeletonInfo {
	padding: 15px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.skeletonTitle,
.skeletonPrice,
.skeletonButton {
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
	animation: shimmer 1.5s infinite;
	border-radius: 4px;
}

.skeletonTitle {
	height: 20px;
	width: 80%;
}
.skeletonPrice {
	height: 15px;
	width: 40%;
}
.skeletonButton {
	height: 35px;
	width: 100%;
	margin-top: 10px;
}

@keyframes shimmer {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}

```

---
### FICHIER : code/src/assets/css/products.module.css

```css
.productsSection {
	padding: 60px 20px;
	max-width: 1200px;
	margin: 0 auto;
}

.mainTitle {
	text-align: center;
	font-family: "Playfair Display", serif;
	color: #645945;
	font-size: 2.5rem;
	margin-bottom: 40px;
	position: relative;
}

/* Petit trait décoratif sous le titre */
.mainTitle::after {
	content: "";
	display: block;
	width: 60px;
	height: 3px;
	background: #c5a059;
	margin: 10px auto;
}

/* Grille Responsive */
.productsGrid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
}

/* Carte Produit */
.productCard {
	background: white;
	border-radius: 15px;
	overflow: hidden;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
	display: flex;
	flex-direction: column;
}

.productCard:hover {
	transform: translateY(-10px);
	box-shadow: 0 10px 25px rgba(100, 89, 69, 0.1);
}

/* Image */
.imageWrapper {
	height: auto;
	width: 100%;
	background-color: #f3efe4;
}

.imageWrapper img {
	width: 100%;
	height: 250px;
	object-fit: cover;
	transition: transform 0.5s ease;
}

.productCard:hover .imageWrapper img {
	transform: scale(1.1);
}

/* Infos */
.productInfo {
	padding: 15px 20px;
	text-align: left;
	align-items: stretch;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.productInfo h3 {
	font-family: "Playfair Display", serif;
	color: #4a3f35;
	font-size: 1.1rem;
	margin: 0;
}

.productInfo a {
	text-decoration: none;
}

.price {
	color: #c5a059;
	font-weight: bold;
	font-size: 1rem;
}

/* Bouton */
.viewButton {
	margin-top: auto;
	background-color: #645945;
	color: white;
	border: none;
	padding: 8px;
	border-radius: 5px;
	cursor: pointer;
	transition: background 0.3s;
	font-family: "Playfair Display", serif;
	font-size: 0.9rem;
}

.viewButton:hover {
	background-color: #c5a059;
}

/* centre la fiche */
.productDetailContainer {
	max-width: 600px;
	margin: 0 auto;
}

.productDetailContainer .productCard {
	flex-direction: row-reverse;
}

.descriptionText {
	color: #4a3f35;
	font-size: 1rem;
	line-height: 1.7;
	padding: 15px 0;
	text-align: left;
}

.backLink {
	display: inline-block;
	margin-top: 20px;
	color: #645945;
	text-decoration: none;
	font-size: 0.9rem;
	font-family: "Playfair Display", serif;
	transition: color 0.3s;
}

.backLink:hover {
	color: #c5a059;
}

.descriptionText h2 {
	font-family: "Playfair Display", serif;
	color: #645945;
	font-size: 1.8rem;
	margin-top: 30px;
	border-bottom: 1px solid #f3efe4;
	padding-bottom: 10px;
}

.descriptionText h3 {
	font-family: "Playfair Display", serif;
	color: #c5a059;
	font-size: 1.3rem;
	margin-top: 25px;
	margin-bottom: 10px;
}

.descriptionText p {
	margin-bottom: 15px;
}

.descriptionText ul {
	list-style: none;
	padding-left: 10px;
	margin-bottom: 20px;
}

.descriptionText li {
	position: relative;
	padding-left: 25px;
	margin-bottom: 10px;
}

.descriptionText li::before {
	content: "◈";
	position: absolute;
	left: 0;
	color: #c5a059;
}

.descriptionText strong {
	color: #645945;
	font-weight: 600;
}

span {
	gap: 15px;
}

```

---
### FICHIER : code/src/assets/css/profil_card.module.css

```css
.profileContainer {
	max-width: 900px;
	margin: 40px auto;
	padding: 20px;
	animation: fadeIn 0.5s ease-in-out;
}

.profileContainer h1 {
	font-family: "Playfair Display", serif;
	color: #645945;
	text-align: center;
	margin-bottom: 40px;
	font-size: 2.5rem;
}

/* Style de la carte injectée */
.infoCard {
	background: #ffffff;
	border-radius: 15px;
	padding: 40px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
	border: 1px solid #f3efe4;
	position: relative;
	overflow: hidden;
}

.infoCard::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 5px;
	background: linear-gradient(90deg, #c5a059, #e2d1b3);
}

.infoCard h3 {
	font-family: "Playfair Display", serif;
	color: #c5a059;
	font-size: 1.8rem;
	margin-bottom: 25px;
	border-bottom: 1px solid #f3efe4;
	padding-bottom: 10px;
}

.infoRow {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
	border-bottom: 1px dotted #e2d1b3;
}

.infoRow:last-of-type {
	border-bottom: none;
}

.infoRow span {
	color: #888;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 0.8rem;
	letter-spacing: 1px;
}

.infoRow strong {
	color: #4a4a4a;
	font-size: 1.1rem;
}

/* Animation d'entrée */
@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

```

---
### FICHIER : code/src/assets/css/public_layout.module.css

```css
.appContainer {
    display: flex;
    flex-direction: column;
    /* Force le site à faire au moins la hauteur de l'écran */
    min-height: 100vh;
}

.mainContent {
    /* Dit au contenu de prendre tout l'espace vide, poussant le footer en bas */
    flex: 1;
}
```

---
### FICHIER : code/src/assets/css/reset.css

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

```

---
### FICHIER : code/src/assets/css/shop_preview.module.css

```css
.shopPreview {
	padding: 100px 20px;
	text-align: center;
	background-color: #f3efe4;
}

.shopPreview h2 {
	font-family: "Playfair Display", serif;
	color: #645945;
	margin-bottom: 15px;
}

.shopPreview p {
	color: #8a7d6a;
	margin-bottom: 30px;
}

.secondaryLink {
	color: #645945;
	text-decoration: none;
	font-weight: bold;
	border-bottom: 2px solid #c5a059;
	padding-bottom: 5px;
	transition: color 0.3s;
}

.secondaryLink:hover {
	color: #c5a059;
}

```
