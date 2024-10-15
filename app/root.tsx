import "@mantine/core/styles.css";

import "@mantine/carousel/styles.css";

import { Button, ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { LinksFunction } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { useThemes } from "./hooks/use-themes";

export const links: LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
	const { themes, currentThemeName } = useThemes();

	return (
		<html lang="en" data-mantine-theme="forest">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<ColorSchemeScript />
				<Meta />
				<Links />
			</head>
			<body>
				<MantineProvider theme={themes[currentThemeName].mantineTheme}>
					<Button>A</Button>
					{children}
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
