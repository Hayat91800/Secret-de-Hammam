// Ce fichier simule ce qui sera plus tard dans MongoDB
export const PRODUCT_GUIDE_DATA: Record<
	number,
	{ production: string; skin_tips: string; usage: string }
> = {
	1: {
		// Savon Noir
		production:
			"Cuit au chaudron de manière traditionnelle avec des olives noires broyées.",
		skin_tips:
			"Parfait pour les peaux grasses et mixtes. Éviter sur peau très irritée.",
		usage:
			"Appliquer sur peau chaude, laisser poser 5 min, puis frotter avec le gant Kessa.",
	},
	3: {
		// Huile d'Argan
		production:
			"Pressée à froid à partir d'amandons non torréfiés pour préserver la Vitamine E.",
		skin_tips:
			"Idéal pour les peaux sèches, matures et même les cheveux cassants.",
		usage:
			"Appliquer quelques gouttes le soir en massage circulaire sur le visage et le cou.",
	},
	6: {
		// Figue de Barbarie
		production:
			"Huile rare obtenue par pression à froid des pépins. 1 tonne de fruits pour 1L d'huile.",
		skin_tips:
			"Le graal pour les peaux matures. Effet tenseur et anti-cerne puissant.",
		usage:
			"Une seule goutte suffit sur les zones ciblées (contour des yeux, ridules).",
	},
};
