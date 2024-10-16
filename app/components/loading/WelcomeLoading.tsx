import { Center, Flex, Image, Stack, Title } from "@mantine/core";
import { useTimeout } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TextTyping } from "../typography/TextTyping";

function Base() {
	return (
		<motion.div
			initial={false}
			exit={{ opacity: 0 }}
			style={{
				position: "fixed",
				zIndex: 9999,
			}}
		>
			<Flex
				align="center"
				justify="center"
				style={{
					height: "100vh",
					width: "100vw",
					background: "black",
					color: "white",
				}}
			>
				<Stack>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<Center>
							<Image
								src="/logo-light.svg"
								alt="Mantine Themes"
								w={100}
							/>
						</Center>
					</motion.div>
					<Title>
						<TextTyping text="Mantine Themes." />
					</Title>
				</Stack>
			</Flex>
		</motion.div>
	);
}

export function WelcomeLoading() {
	const [show, setShow] = useState(true);
	const { start } = useTimeout(() => setShow(false), 1200);

	useEffect(() => {
		start();
	});

	return <AnimatePresence>{show && <Base />}</AnimatePresence>;
}
