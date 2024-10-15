import mantineCoreStyles from "@mantine/core/styles.css?url";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { LinksFunction } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { WelcomeLoading } from "./components/loading/WelcomeLoading";
import { useThemes } from "./hooks/use-themes";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: mantineCoreStyles,
	},
	{
		rel: "icon",
		href: "/logo.svg",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	const { themes, currentThemeName } = useThemes();

	return (
		<html lang="en">
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
					<WelcomeLoading />
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
