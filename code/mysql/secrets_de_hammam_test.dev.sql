-- ATTENTION: NE PAS SUPPRIMER LA BASE DE DONNEES EN PRODUCTION. POSSIBLE UNIQUEMENT EN PHASE DE DEVELOPPEMENT. 
DROP DATABASE IF EXISTS secretsDeHammam_test;
;
-- Créer la base de données
CREATE DATABASE secretsDeHammam_test;

-- Créer les tables : on commence par les tables qui ne contiennent pas de FK
CREATE TABLE secretsDeHammam_test.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL UNIQUE
);

CREATE TABLE secretsDeHammam_test.category(
    id TINYINT(2) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL UNIQUE,
    INDEX (name) 
);

CREATE TABLE secretsDeHammam_test.skin(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR (50) NOT NULL UNIQUE,
    INDEX (type) 
);

CREATE TABLE secretsDeHammam_test.pack(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL UNIQUE,
    price DECIMAL (5,2) NOT NULL,
    INDEX (name) 
);

CREATE TABLE secretsDeHammam_test.body_part(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL UNIQUE,
    INDEX (name) 
);

CREATE TABLE secretsDeHammam_test.product(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL UNIQUE,
    image VARCHAR (50) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL (4,2) NOT NULL,
    category_id TINYINT(2) UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES secretsDeHammam_test.category(id),
    INDEX (name) 
);

CREATE TABLE secretsDeHammam_test.user(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR (50) NOT NULL UNIQUE,
    password VARCHAR (150) NOT NULL,
    role_id TINYINT(1) UNSIGNED,
    skin_id TINYINT(1) UNSIGNED,
    FOREIGN KEY (role_id) REFERENCES secretsDeHammam_test.role(id),
    FOREIGN KEY (skin_id) REFERENCES secretsDeHammam_test.skin(id),
    INDEX (email)
);

CREATE TABLE secretsDeHammam_test.product_skin(
    product_id TINYINT UNSIGNED,
    skin_id TINYINT(1) UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES secretsDeHammam_test.product(id),
    FOREIGN KEY (skin_id) REFERENCES secretsDeHammam_test.skin(id),
    PRIMARY KEY (product_id, skin_id)
);

CREATE TABLE secretsDeHammam_test.product_pack(
    product_id TINYINT UNSIGNED,
    pack_id TINYINT UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES secretsDeHammam_test.product(id),
    FOREIGN KEY (pack_id) REFERENCES secretsDeHammam_test.pack(id),
    PRIMARY KEY (product_id, pack_id)
);

CREATE TABLE secretsDeHammam_test.product_body_part(
    product_id TINYINT UNSIGNED,
    body_part_id TINYINT(1) UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES secretsDeHammam_test.product(id),
    FOREIGN KEY (body_part_id) REFERENCES secretsDeHammam_test.body_part(id),
    PRIMARY KEY (product_id, body_part_id)
);


