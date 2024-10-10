import { ThemePicker } from "@/components/ThemePicker";
import { MantineLayout } from "@/layouts/MantineLayout";
import type { Theme } from "@/lib/themes";

export function ThemePage({ theme }: { theme: Theme }) {
	return (
		<MantineLayout theme={theme}>
			<ThemePicker />
		</MantineLayout>
	);
}
