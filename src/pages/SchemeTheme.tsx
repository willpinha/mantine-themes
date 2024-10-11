import { SchemeToggle } from "@/components/SchemeToggle";
import { MantineLayout } from "@/layouts/MantineLayout";
import { type Scheme, type Theme } from "@/lib/themes";
import themes from "@/themes";
import {
	AppShell,
	Burger,
	Button,
	ColorSwatch,
	em,
	Group,
	Stack,
	Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

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
				background: tm.instance.colors!.primary![4],
				border: tm.instance.colors!.primary![9],
			};
			const secondary = {
				background: tm.instance.colors!.secondary![4],
				border: tm.instance.colors!.secondary![9],
			};
			const tertiary = {
				background: tm.instance.colors!.tertiary![4],
				border: tm.instance.colors!.tertiary![9],
			};
			const base = {
				background: tm.instance.colors!.background,
				border: tm.instance.colors!.border,
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
				<AppShell.Header>
					<Group h="100%" px="md">
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
					</Group>
				</AppShell.Header>
				<AppShell.Navbar p="md">
					<Stack>
						<Group justify="space-between">
							<Title order={5}>Choose a theme</Title>

							<SchemeToggle scheme={scheme} theme={theme} />
						</Group>

						{themes.map((tm) => {
							const isCurrentTheme = tm.slug === theme.slug;

							return (
								<Button
									key={tm.slug}
									justify="space-between"
									component="a"
									href={`/${scheme}-${tm.slug}`}
									variant={
										isCurrentTheme ? "light" : "default"
									}
									rightSection={<AllColorCircles tm={tm} />}
								>
									{tm.label}
								</Button>
							);
						})}
					</Stack>
				</AppShell.Navbar>
				<AppShell.Main>Hello</AppShell.Main>
			</AppShell>
		);
	}

	return (
		<MantineLayout scheme={scheme} theme={theme}>
			<Base />
		</MantineLayout>
	);
}
