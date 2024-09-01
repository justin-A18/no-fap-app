export interface MessageResponse {
	message: string;
};

export interface UserResponse {
	name: string,
	racha: number,
	email: string;
}


export interface RegisterApiResponse {
	data: UserResponse;
}

export interface RachaResponse {
	email: string,
	racha: number,
	update_racha: boolean;
	message: string;
}

export interface UpdateRachaApiResponse {
	data: RachaResponse;
}