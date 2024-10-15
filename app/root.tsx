import "@mantine/core/styles.css";

import "@mantine/carousel/styles.css";

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { LinksFunction } from "react-router";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "./lib/theme";
import { SaturationProvider } from "./hooks/use-saturation";

export const links: LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<ColorSchemeScript forceColorScheme="dark" />
				<Meta />
				<Links />
			</head>
			<body>
				<MantineProvider theme={theme} forceColorScheme="dark">
					<SaturationProvider>{children}</SaturationProvider>
				</MantineProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
