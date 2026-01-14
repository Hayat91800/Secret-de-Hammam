SELECT pack.*, 
GROUP_CONCAT(product_id) AS product_ids 
FROM secretsDeHammam_dev.pack 
JOIN secretsDeHammam_dev.product_pack 
ON product_pack.pack_id = pack.id 
JOIN secretsDeHammam_dev.product 
ON product.id = product_pack.product_id 
GROUP BY pack.id ;

SELECT product.id, product.name, product.price
FROM ${process.env.MYSQL_DATABASE}
WHERE product.id IN (list)

-- Transaction SQL
-- START TRANSACTION

-- Requet 1
-- INSERT INTO database name
-- VALUE

-- variable qui stocke le dernier id inséré
-- SET

--REQUETE 2
-- INSERT INTO database name 
-- VALUE

-- COMMIT;

SELECT product.*,
GROUP_CONCAT(skin.id) AS skin_ids
FROM secretsDeHammam_dev.product

JOIN secretsDeHammam_dev.product_skin
ON product_skin.product_id = product.id
JOIN secretsDeHammam_dev.skin
ON product_skin.skin_id = skin.id

GROUP BY product.id
;

SELECT product.*,
GROUP_CONCAT(pack.id) AS pack_ids
FROM secretsDeHammam_dev.product

JOIN secretsDeHammam_dev.product_pack
ON product_pack.product_id = product.id
JOIN secretsDeHammam_dev.pack
ON product_pack.pack_id = pack.id

GROUP BY product.id
;

SELECT product.*,
GROUP_CONCAT(body_part.id) AS body_part_ids
FROM secretsDeHammam_dev.product

JOIN secretsDeHammam_dev.product_body_part
ON product_body_part.product_id = product.id

JOIN secretsDeHammam_dev.body_part
ON product_body_part.body_part_id = body_part.id

GROUP BY product.id
;







-- 

SELECT product.*,
GROUP_CONCAT(DISTINCT skin.id) AS skin_ids,
GROUP_CONCAT(DISTINCT pack.id) AS pack_ids
FROM secretsDeHammam_dev.product

JOIN secretsDeHammam_dev.product_skin
ON product_skin.product_id = product.id
JOIN secretsDeHammam_dev.skin
ON product_skin.skin_id = skin.id

JOIN secretsDeHammam_dev.product_pack
ON product_pack.product_id = product.id
JOIN secretsDeHammam_dev.pack
ON product_pack.pack_id = pack.id

GROUP BY product.id
;