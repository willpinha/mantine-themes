import type { Theme } from "@/lib/themes";
import { MantineProvider } from "@mantine/core";

export function MantineLayout({
	theme,
	children,
}: {
	theme: Theme;
	children: React.ReactNode;
}) {
	return <MantineProvider theme={theme.instance}>{children}</MantineProvider>;
}
