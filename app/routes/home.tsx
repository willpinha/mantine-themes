import { AreaChart } from "@mantine/charts";
import {
	ActionIcon,
	Anchor,
	Avatar,
	Badge,
	Button,
	Center,
	Grid,
	Group,
	Pagination,
	Paper,
	Stack,
	Table,
	Text,
	TextInput,
	ThemeIcon,
	Title,
	Tooltip,
} from "@mantine/core";
import {
	TbArrowRight,
	TbEye,
	TbMail,
	TbPencil,
	TbPlus,
	TbTrash,
} from "react-icons/tb";
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
		<Paper p="md" shadow="xs" className={surfaceClasses["surface"]}>
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

function CrudTable() {
	const Actions = () => (
		<Group wrap="nowrap" gap="xs">
			<Tooltip label="Read">
				<ActionIcon color="primary">
					<TbEye />
				</ActionIcon>
			</Tooltip>
			<Tooltip label="Update">
				<ActionIcon color="secondary">
					<TbPencil />
				</ActionIcon>
			</Tooltip>
			<Tooltip label="Delete">
				<ActionIcon color="red">
					<TbTrash />
				</ActionIcon>
			</Tooltip>
		</Group>
	);

	return (
		<Paper className={surfaceClasses.surface} p="md" shadow="xs">
			<Stack>
				<Group justify="space-between">
					<Stack gap={0}>
						<Title order={3}>Users</Title>
						<Text c="dimmed" size="sm">
							Manage system users
						</Text>
					</Stack>
					<Button leftSection={<TbPlus />}>Create</Button>
				</Group>
				<Table.ScrollContainer minWidth={500}>
					<Table striped>
						<Table.Thead>
							<Table.Tr>
								<Table.Th>Photo</Table.Th>
								<Table.Th>Name</Table.Th>
								<Table.Th>Email</Table.Th>
								<Table.Th>Role</Table.Th>
								<Table.Th>Actions</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td>
									<Avatar></Avatar>
								</Table.Td>
								<Table.Td>John Doe</Table.Td>
								<Table.Td>john@email.com</Table.Td>
								<Table.Td>
									<Badge variant="outline" color="tertiary">
										Admin
									</Badge>
								</Table.Td>
								<Table.Td>
									<Actions />
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td>
									<Avatar></Avatar>
								</Table.Td>
								<Table.Td>Jane Doe</Table.Td>
								<Table.Td>jane@email.com</Table.Td>
								<Table.Td>
									<Badge variant="outline" color="tertiary">
										User
									</Badge>
								</Table.Td>
								<Table.Td>
									<Actions />
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td>
									<Avatar></Avatar>
								</Table.Td>
								<Table.Td>John Smith</Table.Td>
								<Table.Td>smith@email.com</Table.Td>
								<Table.Td>
									<Badge variant="outline" color="tertiary">
										Guest
									</Badge>
								</Table.Td>
								<Table.Td>
									<Actions />
								</Table.Td>
							</Table.Tr>
						</Table.Tbody>
					</Table>
				</Table.ScrollContainer>
				<Center>
					<Pagination total={10} size="sm" />
				</Center>
			</Stack>
		</Paper>
	);
}

function SimpleAreaChart() {
	const data = [
		{
			date: "Mar 22",
			Apples: 2890,
			Oranges: 2338,
			Tomatoes: 2452,
		},
		{
			date: "Mar 23",
			Apples: 2756,
			Oranges: 2103,
			Tomatoes: 2402,
		},
		{
			date: "Mar 24",
			Apples: 3322,
			Oranges: 986,
			Tomatoes: 1821,
		},
		{
			date: "Mar 25",
			Apples: 3470,
			Oranges: 2108,
			Tomatoes: 2809,
		},
		{
			date: "Mar 26",
			Apples: 3129,
			Oranges: 1726,
			Tomatoes: 2290,
		},
	];

	return (
		<Paper className={surfaceClasses.surface} p="md" shadow="xs">
			<AreaChart
				h={300}
				data={data}
				dataKey="date"
				withLegend
				series={[
					{ name: "Apples", color: "primary.6" },
					{ name: "Oranges", color: "secondary.6" },
					{ name: "Tomatoes", color: "tertiary.6" },
				]}
				curveType="linear"
			/>
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
					See some usage examples below for the{" "}
					<Text span fw="bold" fs="italic">
						{theme.label}
					</Text>{" "}
					theme
				</Text>
			</Stack>
			<Grid>
				<Grid.Col span={12}>
					<SimpleAreaChart />
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 6 }}>
					<LoginForm />
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 6 }}>
					<CrudTable />
				</Grid.Col>
			</Grid>
		</Stack>
	);
}
