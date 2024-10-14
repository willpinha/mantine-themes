import { Examples } from "@/components/Examples";
import classes from "./scheme-theme.module.css";

import { DocumentationButton } from "@/components/DocumentationButton";
import { SchemeToggle } from "@/components/SchemeToggle";
import { MantineLayout } from "@/layouts/MantineLayout";
import { type Scheme, type Theme } from "@/lib/themes";
import { baseURL } from "@/lib/url";
import themes from "@/themes";
import {
	ActionIcon,
	Anchor,
	AppShell,
	Burger,
	Button,
	ColorSwatch,
	em,
	Group,
	Stack,
	Text,
	Title,
	Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { TbArrowRight, TbBrandGithub } from "react-icons/tb";

export function SchemeThemePage({
	scheme,
	theme,
}: {
	scheme: Scheme;
	theme: Theme;
}) {
	function Base() {
		const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
		const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

		const ColorCircle = ({
			background,
			border,
		}: {
			background: string;
			border: string;
		}) => (
			<ColorSwatch
				color={background}
				size={em(20)}
				style={{ border: `3px solid ${border}` }}
			/>
		);

		const AllColorCircles = ({ tm }: { tm: Theme }) => {
			const primary = {
				background: tm.instance.colors!.primary![9],
				border: tm.instance.colors!.primary![5],
			};
			const secondary = {
				background: tm.instance.colors!.secondary![9],
				border: tm.instance.colors!.secondary![5],
			};
			const tertiary = {
				background: tm.instance.colors!.tertiary![9],
				border: tm.instance.colors!.tertiary![5],
			};
			const base =
				scheme === "light"
					? {
							background: tm.instance!.white!,
							border: tm.instance.colors!.gray![5],
						}
					: {
							background: tm.instance.colors!.dark![7],
							border: tm.instance.colors!.dark![5],
						};

			return (
				<Group gap={em(3)}>
					<ColorCircle
						background={primary.background}
						border={primary.border}
					/>
					<ColorCircle
						background={secondary.background}
						border={secondary.border}
					/>
					<ColorCircle
						background={tertiary.background}
						border={tertiary.border}
					/>
					<ColorCircle
						background={base.background}
						border={base.border}
					/>
				</Group>
			);
		};

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
				<AppShell.Header className={classes.header}>
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
								<Title visibleFrom="sm" order={5}>
									Mantine Themes
								</Title>
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
							<DocumentationButton />
							<Tooltip label="GitHub">
								<ActionIcon
									aria-label="GitHub"
									color="dark.6"
									component="a"
									href="https://github.com/willpinha/mantine-themes"
								>
									<TbBrandGithub />
								</ActionIcon>
							</Tooltip>
						</Group>
					</Group>
				</AppShell.Header>
				<AppShell.Navbar p="md" className={classes.navbar}>
					<Stack>
						<Group justify="space-between">
							<Stack gap={0}>
								<Title order={5}>Choose a theme</Title>
								<Text c="dimmed" size="xs">
									{theme.label} selected
								</Text>
							</Stack>

							<SchemeToggle scheme={scheme} theme={theme} />
						</Group>

						<Stack gap="xs">
							{themes.map((tm) => {
								const isCurrentTheme = tm.slug === theme.slug;

								return (
									<Button
										key={tm.slug}
										justify="space-between"
										component="a"
										href={`${baseURL()}/${scheme}-${tm.slug}`}
										variant={
											isCurrentTheme ? "light" : "default"
										}
										rightSection={
											<AllColorCircles tm={tm} />
										}
									>
										{isCurrentTheme && <TbArrowRight />}
										{tm.label}
									</Button>
								);
							})}
						</Stack>
					</Stack>
				</AppShell.Navbar>
				<AppShell.Main>
					<Title pb="md">Examples</Title>
					<Examples />
				</AppShell.Main>
			</AppShell>
		);
	}

	return (
		<MantineLayout scheme={scheme} theme={theme}>
			<Base />
		</MantineLayout>
	);
}
