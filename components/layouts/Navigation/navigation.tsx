// Local Components
import { LogoTile, NavigationItem } from "./components";

export const Navigation: React.FC = () => {
	return (
		<nav className="name-navigation flex justify-center lg:justify-start items-center flex-row w-full lg:w-fit lg:flex-col lg:h-full rounded gap-2">
			<LogoTile />
			<NavigationItem />
			<NavigationItem />
			<NavigationItem />
		</nav>
	);
};
