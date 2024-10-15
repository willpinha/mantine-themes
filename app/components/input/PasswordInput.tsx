import {
	Anchor,
	Group,
	PasswordInput as MantinePasswordInput,
	Text,
	ThemeIcon,
} from "@mantine/core";
import { TbLock } from "react-icons/tb";
import classes from "./password-input.module.css";

export function PasswordInput() {
	return (
		<MantinePasswordInput
			label={
				<Group justify="space-between">
					<Text inherit>Password</Text>
					<Text size="xs">
						<Anchor inherit c="tertiary">
							Forgot password?
						</Anchor>
					</Text>
				</Group>
			}
			placeholder="Enter your password"
			leftSection={
				<ThemeIcon color="secondary" variant="light" size="sm">
					<TbLock />
				</ThemeIcon>
			}
			classNames={{
				label: classes.label,
			}}
		/>
	);
}
