import { Suspense } from "react";
import Carrousel from "../../components/carrousel";
// import FeaturedProducts from "../../components/home/featuredProducts";
import Features from "../../components/home/features";
import Hero from "../../components/home/hero";
import { FeaturedSkeleton } from "../../components/home/product_skeleton";
import ShopPreview from "../../components/home/shopPreview";
import Seo from "../../components/seo";

const HomePage = () => {
	// uniquement des composants
	// SEO

	return (
		<main>
			<Seo title="Accueil" description="Accueil - Desk" url="/" />
			<Hero />
			<Features />
			<Suspense fallback={<FeaturedSkeleton />}>
				{/* <FeaturedProducts /> */}
				<Carrousel />
			</Suspense>
			<ShopPreview />
		</main>
	);
};

export default HomePage;
