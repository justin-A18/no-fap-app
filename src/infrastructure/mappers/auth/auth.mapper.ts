import { UserResponse } from "@/infrastructure/interfaces/api.response";

interface UserPayload {
	name: string;
	email: string;
	racha: number;
}

export class AuthMapper {
	public static toUserPayload(user: UserResponse): UserPayload {
		return {
			name: user.name,
			email: user.email,
			racha: user.racha
		};
	}
}