import styles from "./../../assets/css/product_skeleton.module.css";

const ProductSkeleton = () => {
	return (
		<div className={styles.skeletonCard}>
			<div className={styles.skeletonImage}></div>
			<div className={styles.skeletonInfo}>
				<div className={styles.skeletonTitle}></div>
				<div className={styles.skeletonPrice}></div>
				<div className={styles.skeletonButton}></div>
			</div>
		</div>
	);
};

export const FeaturedSkeleton = () => {
	return (
		<section style={{ padding: "40px 20px" }}>
			{/* On imite la grille de produits (par exemple 4 cartes) */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
					gap: "20px",
					maxWidth: "1200px",
					margin: "0 auto",
				}}
			>
				{[1, 2, 3, 4].map((i) => (
					<ProductSkeleton key={i} />
				))}
			</div>
		</section>
	);
};
