INSERT INTO secretsDeHammam_dev.role (name) VALUES
('admin'),
('user');

INSERT INTO secretsDeHammam_dev.category (name) VALUES
('Savons'),
('Huiles'),
('Gommages'),
('Shampoings'),
('Masques'),
('Accessoires');

INSERT INTO secretsDeHammam_dev.skin (type) VALUES
('Normale'),
('Sèche'),
('Grasse'),
('Mixte'),
('Sensible'),
('Mature');

INSERT INTO secretsDeHammam_dev.pack (name, price) VALUES
('Rituel Hammam Complet', 49.90),
('Pack Bien-Être', 29.90),
('Découverte Oriental', 19.90),
('Coffret Luxe', 69.90);

INSERT INTO secretsDeHammam_dev.body_part (name) VALUES
('Visage'),
('Corps'),
('Cheveux'),
('Mains'),
('Pieds');

INSERT INTO secretsDeHammam_dev.product 
(name, image, description, price, category_id) VALUES
('Savon Noir Traditionnel', 'Savon_noir.png', 'Savon noir naturel à base d\'huile d’olive, idéal pour préparer la peau au gommage.', 7.90, 1),
('Gant Kessa Premium', 'Gant_Kessa.png', 'Gant exfoliant de haute qualité pour éliminer les cellules mortes et lisser la peau.', 5.90, 6),
('Huile d’Argan Pure', 'huile_argan.png', 'Huile d’argan 100% pure, nourrissante et réparatrice pour la peau et les cheveux.', 14.90, 2),
('Rhassoul en Poudre', 'Rhassoul_poudre.jpg', 'Poudre de rhassoul naturelle du Maroc pour purifier la peau et les cheveux.', 8.50, 5),
('Shampoing à l’Aloe Vera', 'shampoing_aloe_vera.png', 'Shampoing doux hydratant à l\'aloe vera pour tous types de cheveux.', 9.90, 4),
('Huile de Figue de Barbarie', 'Huile_figue_de_barbarie.png', 'Huile précieuse antioxydante et anti-âge pour peau mature ou sensible.', 29.90, 2),
('Baume pour les Mains Oriental', 'Baume_main.png', 'Baume nourrissant aux huiles orientales pour des mains douces et réparées.', 6.90, 1),
('Gommage au Sucre et Miel', 'Gommage_sucre_miel.png', 'Exfoliant doux au sucre, miel et fleur d’oranger.', 12.50, 3),
('Masque Visage au Ghassoul', 'Masque_visage_rhassoul.jpg', 'Masque purifiant pour diminuer les imperfections et absorber l’excès de sébum.', 11.90, 5),
('Huile de Nigelle', 'huile_nigelle.jpg', 'Huile de nigelle reconnue pour ses propriétés apaisantes et anti-imperfections.', 13.90, 2);

-- admin@hammam.com / admin 
-- client1@test.com / client1 
-- client2@test.com / admin 
INSERT INTO secretsDeHammam_dev.user (email, password, role_id, skin_id) VALUES
('admin@hammam.com', '$argon2i$v=19$m=16,t=2,p=1$UjdRQlAwR2FOSnY3eDZNWg$t7mHIlV7pYC64GrfIGq+Sg', 1, 3),
('client1@test.com', '$argon2i$v=19$m=16,t=2,p=1$YmxzeXZDMVJhMURGb29Lbg$9kFrw3pSNtNAq5YgDw6aRg', 2, 2),
('client2@test.com', '$argon2i$v=19$m=16,t=2,p=1$YmxzeXZDMVJhMURGb29Lbg$9kFrw3pSNtNAq5YgDw6aRg', 2, 5);

INSERT INTO secretsDeHammam_dev.product_skin (product_id, skin_id) VALUES
(1, 2), (1, 3), (1, 4),
(3, 2), (3, 5),
(4, 3), (4, 4),
(6, 6), (6, 5),
(9, 3), (9, 4),
(10, 3), (10, 5);

INSERT INTO secretsDeHammam_dev.product_pack VALUES
(1, 1), (2, 1), (3, 1), (4, 1),
(3, 2), (7, 2),
(1, 3), (8, 3),
(3, 4), (6, 4), (10, 4);

INSERT INTO secretsDeHammam_dev.product_body_part VALUES
(1, 2),
(2, 2),
(3, 2), (3, 3),
(4, 1), (4, 3),
(5, 3),
(6, 1),
(7, 4),
(8, 2),
(9, 1),
(10, 1), (10, 2);
