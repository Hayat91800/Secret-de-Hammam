-- mysql -u root -p;
-- show databases;
-- source secrets_de_hammam.dev.sql;
-- use secretsDeHammam_dev;
-- show databases;
-- ATTENTION: NE PAS SUPPRIMER LA BASE DE DONNEES EN PRODUCTION. POSSIBLE UNIQUEMENT EN PHASE DE DEVELOPPEMENT. 
DROP DATABASE IF EXISTS secretsDeHammam_dev;

-- Créer la base de données
CREATE DATABASE secretsDeHammam_dev;

-- Créer les tables : on commence par les tables qui ne contiennent pas de FK
CREATE TABLE secretsDeHammam_dev.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL UNIQUE
);

CREATE TABLE secretsDeHammam_dev.category(
    id TINYINT(2) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL UNIQUE,
    INDEX (name) 
);

CREATE TABLE secretsDeHammam_dev.skin(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR (50) NOT NULL UNIQUE,
    INDEX (type) 
);

CREATE TABLE secretsDeHammam_dev.pack(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL UNIQUE,
    price DECIMAL (5,2) NOT NULL,
    INDEX (name) 
);

CREATE TABLE secretsDeHammam_dev.body_part(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL UNIQUE,
    INDEX (name) 
);

CREATE TABLE secretsDeHammam_dev.product(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL UNIQUE,
    image VARCHAR (50) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL (4,2) NOT NULL,
    category_id TINYINT(2) UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES secretsDeHammam_dev.category(id),
    INDEX (name) 
);

CREATE TABLE secretsDeHammam_dev.user(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR (50) NOT NULL UNIQUE,
    password VARCHAR (150) NOT NULL,
    role_id TINYINT(1) UNSIGNED,
    skin_id TINYINT(1) UNSIGNED,
    FOREIGN KEY (role_id) REFERENCES secretsDeHammam_dev.role(id),
    FOREIGN KEY (skin_id) REFERENCES secretsDeHammam_dev.skin(id),
    INDEX (email)
);

CREATE TABLE secretsDeHammam_dev.product_skin(
    product_id TINYINT UNSIGNED,
    skin_id TINYINT(1) UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES secretsDeHammam_dev.product(id),
    FOREIGN KEY (skin_id) REFERENCES secretsDeHammam_dev.skin(id),
    PRIMARY KEY (product_id, skin_id)
);

CREATE TABLE secretsDeHammam_dev.product_pack(
    product_id TINYINT UNSIGNED,
    pack_id TINYINT UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES secretsDeHammam_dev.product(id),
    FOREIGN KEY (pack_id) REFERENCES secretsDeHammam_dev.pack(id),
    PRIMARY KEY (product_id, pack_id)
);

CREATE TABLE secretsDeHammam_dev.product_body_part(
    product_id TINYINT UNSIGNED,
    body_part_id TINYINT(1) UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES secretsDeHammam_dev.product(id),
    FOREIGN KEY (body_part_id) REFERENCES secretsDeHammam_dev.body_part(id),
    PRIMARY KEY (product_id, body_part_id)
);









-- bash-5.1# mysql -u root -p;
-- Enter password: 
-- Welcome to the MySQL monitor.  Commands end with ; or \g.
-- Your MySQL connection id is 9
-- Server version: 9.5.0 MySQL Community Server - GPL

-- Copyright (c) 2000, 2025, Oracle and/or its affiliates.

-- Oracle is a registered trademark of Oracle Corporation and/or its
-- affiliates. Other names may be trademarks of their respective
-- owners.

-- Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

-- mysql> show databases;
-- +---------------------+
-- | Database            |
-- +---------------------+
-- | information_schema  |
-- | mysql               |
-- | performance_schema  |
-- | secretsDeHammam_dev |
-- | sys                 |
-- +---------------------+
-- 5 rows in set (0.011 sec)

-- mysql> source secrets_de_hammam.dev.sql;
-- Query OK, 0 rows affected (0.000 sec)

-- Query OK, 3 rows affected (0.094 sec)

-- Query OK, 0 rows affected (0.000 sec)

-- Query OK, 1 row affected (0.017 sec)

-- Query OK, 0 rows affected (0.000 sec)

-- Query OK, 0 rows affected, 1 warning (0.055 sec)

-- Query OK, 0 rows affected, 1 warning (0.053 sec)

-- Query OK, 0 rows affected, 1 warning (0.052 sec)

-- mysql> use secretsDeHammam_dev;
-- Reading table information for completion of table and column names
-- You can turn off this feature to get a quicker startup with -A

-- Database changed
-- mysql> show tables;
-- +-------------------------------+
-- | Tables_in_secretsDeHammam_dev |
-- +-------------------------------+
-- | category                      |
-- | role                          |
-- | skin                          |
-- +-------------------------------+
-- 3 rows in set (0.002 sec)

-- mysql> 