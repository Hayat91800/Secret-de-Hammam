import type { SeoProps } from "../models/props/seo_props";

// récupéré les props dans les parametres ()de la fonction du composant
const Seo = ({ title, description, url }: SeoProps) => {
	return (
		<>
			{/* A peu pres 50 caratcere au maximum */}
			<title>{`Sercret de Hammam - ${title}`}</title>

			{/* A peu pres 150 caratcere au maximum */}
			<meta name="description" content={`Secret de Hammam - ${description}`} />

			{/* Open Graph Your content's social media identity*/}
			<meta property="og:title" content={`Sercret de Hammam - ${title}`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://secretsdehammam.com/${url}`} />
			{/* Image format 1200 x 630 pixels (taille optimale pour Facebook)*/}
			<meta property="og:image" content="https://yoursite.com/image.jpg" />
			<meta
				property="og:description"
				content={`Secret de Hammam - ${description}`}
			/>

			{/* Twitter*/}

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@yourusername" />
			<meta name="twitter:title" content={`Sercret de Hammam - ${title}`} />
			<meta
				name="twitter:description"
				content={`Secret de Hammam - ${description}`}
			/>
			{/* Utilisez des images carrées */}
			<meta name="twitter:image" content="https://yoursite.com/image.jpg" />
		</>
	);
};

export default Seo;
