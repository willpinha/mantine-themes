import { Flex, Title } from "@mantine/core";
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
				<Title>
					<TextTyping text="Mantine Themes." />
				</Title>
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

	return <AnimatePresence mode="wait">{show && <Base />}</AnimatePresence>;
}
