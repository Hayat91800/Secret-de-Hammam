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
