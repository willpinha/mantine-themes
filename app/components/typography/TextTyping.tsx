import { Text } from "@mantine/core";
import { motion } from "framer-motion";

type TextTypingProps = {
	text: string;
};

export function TextTyping({ text }: TextTypingProps) {
	const chars = text.split("");

	return (
		<Text span inherit>
			{chars.map((char, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.25,
						delay: index / 25,
					}}
				>
					{char}
				</motion.span>
			))}
		</Text>
	);
}
