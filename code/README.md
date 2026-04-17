# 🌿 Secret-de-Hammam

![title](code/public/img/products/logo_secret_de_hammam_1.png)

## Description projet

Secret de Hammam est une application Fullstack conçue pour offrir une expérience boutique immersive couplée à des guides de soins. Le projet met l'accent sur la performance, la sécurité et une architecture robuste.

## Fonctionnalités

### 👩‍💻 Administrateur

Gestion des produits via  dashboard : CRUD Complet
* Ajouter produits
* Modifier produit
* Supprimer produit

### 👩 Public 

* Formulaire de contact

### Utilisateur connecté

* Dashboard profil

### Stack Technique

#### Frontend
* **React 18 & TypeScript** : Interface dynamique et typage rigoureux.
* **Vite** : Environnement de développement performant.
* **Figma** : Prototypage UI/UX.
* **CSS Modules** : Styles isolés pour une meilleure maintenabilité.
* **React Hook Form** : Validation fluide des formulaires.

#### Backend & API
* **Node.js & Express** : Serveur d'API REST.
* **Postman** : Tests et documentation des endpoints.
* **Argon2 & JWT** : Sécurisation (hachage) et gestion de l'authentification.
* **Zod** : Validation des schémas de données.

#### Base de données
* **Mysql** : Gestion du cœur de métier (Produits, Utilisateurs, Commandes).
* **Mongodb** : Gestion souple des documents (Formulaires de contact).


#### Infrastructure & DevOps
* **Docker** : Conteneurisation pour l'isolation des services et la reproductibilité de l'environnement.
* **Git & GitHub** : Gestion de version décentralisée et collaboration.
* **GitHub Actions** : Automatisation du cycle CI/CD (Linting, Tests).

#### Outils de développement
* **VSCode**
* **Terminal** (Zsh/Bash) : Gestion des scripts npm et commandes Docker.

### Dépendances

#### Backend

* express => serveur API

* mysql2 => connexion MySQL

* argon2 => hash des mots de passe

* cors => communication frontend/backend

* zod => validation des données


#### Frontend

* react → interface utilisateur

* typescript → typage du code

* react-router → navigation

* react-markdown → affichage des leçons

## Installation

Le projet est entièrement conteneurisé pour garantir un environnement stable.

### 1. Prérequis: 

- Installer vscode : [Vscode](https://code.visualstudio.com/)
- Installer docker : [Docker](https://www.docker.com/)
- Installer git : [Git](https://git-scm.com/)

### 2. Lancement rapide

``` Bash ```

Cloner le projet
```
git clone https://github.com/ton-profil/secret-de-hammam.git 
cd secret-de-hammam 
```

Lancer l'infrastructure avec Docker
```

docker compose up --build
```
### 3. Accès aux services

Site Web (Frontend) : http://localhost:5173

API (Backend) : http://localhost:3000

### Procédure d'accès 

Frontend
```
npm run dev
```

Backend
``` 
npm run server
```

### Installation des dépendances en local

```Bash```
```
npm install
```

### Procedure de test

Des tests automatisés, garantissent que chaque fonctionnalité répond aux attentes.

Tests unitaires
```
npm run test 
```
Tests de couverture
```
npm run test : coverage
```
### Schéma Merise

### Point d'acces api REST (endpoints)

Methode HTTP              | Route                  | Description
---------------------------------------------------------------------------------
POST       User           | /api/register          | Enregistrer un utilisateur
---------------------------------------------------------------------------------
POST       User           | /api/login             | Connecter un utilisateur (generation de JWT)
--------------------------------------------------------------------------------- 
GET        Product        | /api/products          | Récupérer la liste de tous les produits
---------------------------------------------------------------------------------
GET        Product        | /api/products/:id      | Récupérer les détails d'un produit spécifique
--------------------------------------------------------------------------------- 
POST       Product        | /api/products          | Ajouter un nouveau produit (Admin)
---------------------------------------------------------------------------------
PUT        Product        | /api/products/:id      | Modifier un produit existant (Admin)
--------------------------------------------------------------------------------- 
DELETE     Product        | /api/products/:id      | Supprimer un produit (Admin)
----------------------------------------------------------------------------------
GET        Category       | /api/categories        | Récupérer toutes les catégories de soins
---------------------------------------------------------------------------------- 
POST       Contact        | /api/contact           | Envoyer un message via le formulaire (Mongodb)
----------------------------------------------------------------------------------


### Telecharger document

[Mon projet de certification pdf](Docs_projet/mon_projet_certification2.pdf)