export function marks(step: number, last: number) {
	const marks = [];
	for (let i = 0; i <= last; i += step) {
		marks.push({ value: i, label: `${i}%` });
	}
	return marks;
}
