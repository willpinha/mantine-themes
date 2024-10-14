export function baseURL() {
	if (import.meta.env.DEV) {
		return "";
	}

	return import.meta.env.BASE_URL;
}
