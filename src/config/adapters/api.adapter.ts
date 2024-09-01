import { HttpAdapter } from "./http";

export const apiFetcher = new HttpAdapter({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL as string,
});
