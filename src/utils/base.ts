/** Root path for this deploy (e.g. `/` locally, `/repo-name/` on GitHub project pages). */
export const base = import.meta.env.BASE_URL;

/** Join a site path (with or without a leading slash) onto the configured base. */
export function withBase(path: string): string {
	const normalized = path.replace(/^\/+/, "");
	if (!normalized) {
		return base;
	}
	return `${base}${normalized}`;
}
