import { RegisterApiResponse } from "@/infrastructure/interfaces/api.response";
import { AuthMapper } from "@/infrastructure/mappers/auth/auth.mapper";
import { HttpAdapter } from "@/config/adapters/http";

export const registerUserUseCase = async (
	apiFetcher: HttpAdapter,
	body: Record<string, unknown>
) => {
	const { data } = await apiFetcher.post<RegisterApiResponse>(
		'/no_fap_login',
		body
	);
	return AuthMapper.toUserPayload(data);
};