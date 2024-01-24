// Local Components
import { LogoTile, NavigationItem } from "./components";

export const Navigation: React.FC = () => {
	return (
		<nav className="name-navigation justify-start items-center flex-col w-20 h-full rounded translate-x-3 translate-y-6">
			<LogoTile />
			<NavigationItem />
			<NavigationItem />
			<NavigationItem />
		</nav>
	);
};
