import {
	Anchor,
	Button,
	Grid,
	Group,
	Paper,
	Stack,
	Text,
	TextInput,
	ThemeIcon,
	Title,
} from "@mantine/core";
import { TbArrowRight, TbMail } from "react-icons/tb";
import type { MetaFunction } from "react-router";
import { PasswordInput } from "~/components/input/PasswordInput";
import surfaceClasses from "~/css/surface.module.css";
import { useThemes } from "~/hooks/use-themes";

export const meta: MetaFunction = () => {
	return [
		{ title: "Mantine Themes" },
		{
			name: "description",
			content: "Beautiful Mantine themes using semantic colors",
		},
	];
};

function LoginForm() {
	return (
		<Paper
			p="md"
			shadow="sm"
			radius="md"
			className={surfaceClasses["surface"]}
		>
			<Stack>
				<Stack gap={0}>
					<Title order={3}>Login</Title>

					<Text c="dimmed">
						Enter your credentials to access the system
					</Text>
				</Stack>

				<TextInput
					type="email"
					label="Email"
					description="Must be associated with the company"
					placeholder="Enter your email"
					leftSection={
						<ThemeIcon color="secondary" variant="light" size="sm">
							<TbMail />
						</ThemeIcon>
					}
				/>

				<PasswordInput />

				<Button rightSection={<TbArrowRight />}>Enter</Button>

				<Group justify="end">
					<Text size="sm">
						Don't have an account? <Anchor>Register</Anchor>
					</Text>
				</Group>
			</Stack>
		</Paper>
	);
}

export default function Route() {
	const { themes, currentThemeName } = useThemes();

	const theme = themes[currentThemeName];

	return (
		<Stack>
			<Stack gap={0}>
				<Title order={3}>Examples</Title>
				<Text c="dimmed">
					See some usage examples below for the {theme.label} theme
				</Text>
			</Stack>
			<Grid gutter="md">
				<Grid.Col span={6}>
					<LoginForm />
				</Grid.Col>
			</Grid>
		</Stack>
	);
}
