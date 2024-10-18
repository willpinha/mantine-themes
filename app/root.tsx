import mantineChartStyles from "@mantine/charts/styles.css?url";
import mantineCoreStyles from "@mantine/core/styles.css?url";
import appStyles from "./app.css?url";

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
		rel: "stylesheet",
		href: mantineChartStyles,
	},
	{
		rel: "stylesheet",
		href: appStyles,
	},
	{
		rel: "icon",
		href: "/logo-dark.svg",
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
				<ColorSchemeScript defaultColorScheme="dark" />
				<Meta />
				<Links />
			</head>
			<body>
				<MantineProvider
					theme={themes[currentThemeName].mantineTheme}
					defaultColorScheme="dark"
				>
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
