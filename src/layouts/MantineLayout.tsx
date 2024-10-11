import type { Scheme, Theme } from "@/lib/themes";
import { MantineProvider } from "@mantine/core";

export function MantineLayout({
	theme,
	scheme,
	children,
}: {
	theme: Theme;
	scheme: Scheme;
	children: React.ReactNode;
}) {
	return (
		<MantineProvider
			theme={theme.instance}
			defaultColorScheme={scheme}
			forceColorScheme={scheme}
		>
			{children}
		</MantineProvider>
	);
}
