import { CodeHighlight } from "@mantine/code-highlight";
import {
	ActionIcon,
	Alert,
	Anchor,
	Code,
	Modal,
	Stack,
	Text,
	Title,
	Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { TbFileDescription, TbNote } from "react-icons/tb";

const mantineProviderCode = `
import { MantineProvider } from "@mantine/core";

const myTheme = buildThemeInstance({ ... });

function App() {
    return (
        <MantineProvider theme={myTheme}>
            {/* Your app here */}
        </MantineProvider>
    );
}
`;

export function DocumentationButton() {
	const [opened, { open, close }] = useDisclosure();

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				title="Documentation"
				size="lg"
			>
				<Stack gap="md">
					<Title order={3}>1. About</Title>
					<Text>
						<Text span fs="italic" c="secondary">
							Mantine Themes
						</Text>{" "}
						is a project that offers you different{" "}
						<Anchor
							href="https://mantine.dev/theming/theme-object"
							target="_blank"
						>
							Theme objects
						</Anchor>{" "}
						so you can give a new look to your applications that use
						Mantine. Just choose a theme to see how it looks
					</Text>
					<Title order={3}>2. How it works?</Title>
					<Text>
						Each theme is made with the{" "}
						<Code>
							<Anchor
								size="xs"
								target="_blank"
								href="https://github.com/willpinha/mantine-themes/blob/master/src/lib/themes.ts"
							>
								buildThemeInstance()
							</Anchor>
						</Code>{" "}
						function. It creates colors based on{" "}
						<Anchor href="https://hslpicker.com" target="_blank">
							HSL
						</Anchor>{" "}
						and receives the following parameters:
					</Text>
					<Stack gap={0}>
						<Text fw="bold" fs="italic">
							baseHue
						</Text>
						<Text c="dimmed">
							A number between 0 and 360 that represents a color,
							like red, green, blue, etc.
						</Text>
					</Stack>
					<Stack gap={0}>
						<Text fw="bold" fs="italic">
							baseSaturation
						</Text>
						<Text c="dimmed">
							A number between 0 and 100 that represents the
							intensity of the color
						</Text>
					</Stack>
					<Stack gap={0}>
						<Text fw="bold" fs="italic">
							colors
						</Text>
						<Text c="dimmed">
							A object with primary, secondary and tertiary colors
							that can be used in your application. Each one of
							these colors is an array of 10 colors that can be
							built from the Mantine{" "}
							<Anchor
								href="https://mantine.dev/colors-generator"
								target="_blank"
							>
								Colors Generator
							</Anchor>
						</Text>
					</Stack>
					<Text>
						<Text span fw="bold" fs="italic">
							baseHue
						</Text>{" "}
						and{" "}
						<Text span fw="bold" fs="italic">
							baseSaturation
						</Text>{" "}
						are used for background, text, border, and many other
						base colors, while the{" "}
						<Text span fw="bold" fs="italic">
							colors
						</Text>{" "}
						object is used for components like buttons, alerts,
						badges, etc.
					</Text>
					<Title order={3}>3. How to use?</Title>
					<Text>
						Just choose a color from the{" "}
						<Anchor href="https://github.com/willpinha/mantine-themes/tree/master/src/themes">
							available ones
						</Anchor>{" "}
						or build your own with the{" "}
						<Code>buildThemeInstance()</Code> function
					</Text>
					<Alert title="Note" color="secondary" icon={<TbNote />}>
						Mantine Themes is not a library. You will need to copy
						the <Code>buildThemeInstance()</Code> function into your
						project to use it
					</Alert>
					<Text>
						After that, import your generated Theme object inside
						your MantineProvider
					</Text>
					<CodeHighlight code={mantineProviderCode} language="ts" />
				</Stack>
			</Modal>

			<Tooltip label="Documentation">
				<ActionIcon onClick={open} aria-label="Open documentation">
					<TbFileDescription />
				</ActionIcon>
			</Tooltip>
		</>
	);
}
