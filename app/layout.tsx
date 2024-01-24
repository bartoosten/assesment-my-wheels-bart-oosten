import type { Metadata } from "next";
import { ProviderCollection } from "@/components/layouts";
import "./globals.css";

export const metadata: Metadata = {
	title: "MyWheels | Huur een auto",
	description: "Huur een auto met MyWheels",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				<ProviderCollection>{children}</ProviderCollection>
			</body>
		</html>
	);
}
