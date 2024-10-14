import classes from "@/css/surface.module.css";

import {
	ActionIcon,
	Avatar,
	Badge,
	Button,
	Center,
	em,
	Grid,
	Group,
	Pagination,
	Paper,
	PasswordInput,
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
	TbAt,
	TbEye,
	TbLock,
	TbPencil,
	TbPlus,
	TbTrash,
} from "react-icons/tb";

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
		<Paper className={classes.paper} p="md" shadow="sm">
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

export function Examples() {
	return (
		<Grid>
			<Grid.Col span={{ base: 12, md: 5 }}>
				<LoginForm />
			</Grid.Col>
			<Grid.Col span={{ base: 12, md: 7 }}>
				<CrudTable />
			</Grid.Col>
		</Grid>
	);
}
