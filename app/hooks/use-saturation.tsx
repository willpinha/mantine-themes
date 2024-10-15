import { createContext, useContext, useState } from "react";

type SaturationContextType = {
	saturation: number;
	setSaturation: (saturation: number) => void;
};

const SaturationContext = createContext<SaturationContextType | undefined>(
	undefined
);

export function SaturationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [saturation, setSaturation] = useState(50);

	return (
		<SaturationContext.Provider value={{ saturation, setSaturation }}>
			{children}
		</SaturationContext.Provider>
	);
}

export function useSaturation() {
	const context = useContext(SaturationContext);

	if (context === undefined) {
		throw new Error(
			"useSaturation must be used within a SaturationProvider"
		);
	}

	return context;
}
