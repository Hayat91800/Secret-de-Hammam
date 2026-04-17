"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "../../models/product";
import styles from "../assets/css/carroussel.module.css";
import ProductApiService from "../services/product_api_service";

const Carousel = () => {
	const apiService = useMemo(() => new ProductApiService(), []);
	const [products, setProducts] = useState<Product[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await apiService.selectAll();
				if (response?.data) {
					setProducts(response.data as Product[]);
				}
			} catch (error) {
				console.error("Erreur API:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [apiService]);

	useEffect(() => {
		if (products.length <= 1) return;
		const timer = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % products.length);
		}, 3000);
		return () => clearInterval(timer);
	}, [products.length]);

	if (isLoading || products.length === 0) return null;

	return (
		<section className={styles.carousel}>
			<div className={styles.slideWrapper}>
				{products.map((product, index) => (
					<div
						key={product.id}
						className={`${styles.slide} ${
							index === currentIndex ? styles.slideActive : ""
						}`}
					>
						<img
							src={`/img/products/${product.image}`}
							className={styles.image}
							alt={product.name}
						/>
						<div className={styles.overlay}>
							<h2 className={styles.title}>{product.name}</h2>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Carousel;
