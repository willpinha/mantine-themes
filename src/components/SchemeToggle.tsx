import { getTargetScheme, type Scheme, type Theme } from "@/lib/themes";
import { baseURL } from "@/lib/url";
import { ActionIcon } from "@mantine/core";
import { TbMoon, TbSun } from "react-icons/tb";

export function SchemeToggle({
	scheme,
	theme,
}: {
	scheme: Scheme;
	theme: Theme;
}) {
	return (
		<ActionIcon
			aria-label="Toggle scheme"
			component="a"
			href={`${baseURL()}/${getTargetScheme(scheme)}-${theme.slug}`}
			variant="default"
		>
			{scheme === "light" ? <TbMoon /> : <TbSun />}
		</ActionIcon>
	);
}
