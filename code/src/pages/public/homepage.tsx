import Carrousel from "../../components/carrousel";
import Features from "../../components/home/features";
import Hero from "../../components/home/hero";
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
			<Carrousel />
			<ShopPreview />
		</main>
	);
};

export default HomePage;
