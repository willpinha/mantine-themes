import { Button, Modal, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function ThemePicker() {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal opened={opened} onClose={close} title="Choose a theme">
				<Stack></Stack>
			</Modal>

			<Button onClick={open}>Themes</Button>
		</>
	);
}
