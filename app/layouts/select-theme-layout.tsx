import {
	ActionIcon,
	Anchor,
	AppShell,
	Burger,
	Group,
	ScrollArea,
	Stack,
	Text,
	Title,
	Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { TbBrandGithub, TbFileDescription } from "react-icons/tb";
import { Outlet } from "react-router";
import { SchemeToggleButton } from "~/components/button/SchemeToggleButton";
import { SelectThemeButton } from "~/components/button/SelectThemeButton";
import { useThemes } from "~/hooks/use-themes";
import { sortedThemeNames } from "~/themes";
import surfaceClasses from "../css/surface.module.css";

export default function Layout() {
	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

	const { themes, currentThemeName } = useThemes();

	const theme = themes[currentThemeName];

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: {
					mobile: !mobileOpened,
					desktop: !desktopOpened,
				},
			}}
			padding="md"
		>
			<AppShell.Header className={surfaceClasses["surface"]}>
				<Group h="100%" px="md" justify="space-between">
					<Group>
						<Burger
							opened={mobileOpened}
							onClick={toggleMobile}
							hiddenFrom="sm"
							size="sm"
						/>
						<Burger
							opened={desktopOpened}
							onClick={toggleDesktop}
							visibleFrom="sm"
							size="sm"
						/>
						<Stack gap={0}>
							<Title order={5}>Mantine Themes</Title>
							<Text c="dimmed" size="xs">
								Made by{" "}
								<Anchor
									inherit
									href="https://github.com/willpinha"
								>
									willpinha
								</Anchor>
							</Text>
						</Stack>
					</Group>
					<Group gap="xs">
						<Tooltip label="Documentation">
							<ActionIcon
								aria-label="Documentation"
								component="a"
								href="https://github.com/willpinha/mantine-themes?tab=readme-ov-file#documentation"
							>
								<TbFileDescription />
							</ActionIcon>
						</Tooltip>
						<Tooltip label="GitHub">
							<ActionIcon
								aria-label="GitHub"
								color="dark.5"
								component="a"
								href="https://github.com/willpinha/mantine-themes"
							>
								<TbBrandGithub />
							</ActionIcon>
						</Tooltip>
					</Group>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p="md" className={surfaceClasses["surface"]}>
				<AppShell.Section>
					<Group justify="space-between">
						<Stack gap={0}>
							<Title order={5}>Choose a theme</Title>
							<Text c="dimmed" size="xs">
								{theme.label} selected
							</Text>
						</Stack>

						<SchemeToggleButton />
					</Group>
				</AppShell.Section>

				<AppShell.Section grow my="md" component={ScrollArea}>
					<Stack gap="xs">
						{sortedThemeNames.map((themeName) => (
							<SelectThemeButton
								key={themeName}
								themeName={themeName}
							/>
						))}
					</Stack>
				</AppShell.Section>
			</AppShell.Navbar>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
}
