import type React from "react";

type GuardProps = {
	// Reprendre strictement le nom des props définis sur le composant
	roles: string[];
	// children permet de définir que Guard s'applique aux composants enfants imbriquer dans les composant parents (admin layout => sidebar, outlet)
	children: React.JSX.Element | React.JSX.Element[];
};

export type { GuardProps };
