import classes from "@/css/surface.module.css";

import {
	Button,
	em,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	ThemeIcon,
	Title,
} from "@mantine/core";
import { TbArrowRight, TbAt, TbLock } from "react-icons/tb";

function LoginForm() {
	return (
		<Paper shadow="sm" p="md" className={classes.paper}>
			<Stack>
				<Stack gap={em(2)}>
					<Title order={3}>Login</Title>
					<Text size="sm" c="dimmed">
						Enter your credentials
					</Text>
				</Stack>
				<TextInput
					type="email"
					label="Email"
					placeholder="Enter your email..."
					description="It must be associated with the company"
					leftSection={
						<ThemeIcon size="sm" variant="light" color="secondary">
							<TbAt />
						</ThemeIcon>
					}
				/>
				<PasswordInput
					label="Password"
					placeholder="Enter your password..."
					leftSection={
						<ThemeIcon size="sm" variant="light" color="secondary">
							<TbLock />
						</ThemeIcon>
					}
				/>
				<Button rightSection={<TbArrowRight />}>Access</Button>
			</Stack>
		</Paper>
	);
}

export function Examples() {
	return <LoginForm />;
}
