import { HttpAdapter } from "@/config/adapters/http";
import { UpdateRachaApiResponse } from "@/infrastructure/interfaces/api.response";

export const updateRachaUseCase = async (
	apiFetcher: HttpAdapter,
	body: Record<string, unknown>
) => {
	const { data } = await apiFetcher.put<UpdateRachaApiResponse>(
		'/no_fap_update',
		body
	);
	return data;
};