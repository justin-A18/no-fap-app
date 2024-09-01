'use client';

import { UserResponse } from '@/infrastructure/interfaces/api.response';
import { registerUserUseCase } from '@/core/use-cases/auth';
import { apiFetcher } from '@/config/adapters/api.adapter';
import { useMutation } from '@tanstack/react-query';
import { useLocalStorage } from 'usehooks-ts';

import { initialValue, useStore } from '../../_providers';


export const useAuthMutation = () => {

	const [user, setUser] = useLocalStorage<UserResponse>('user', initialValue);
	const { login } = useStore();

	const registerMutation = useMutation({
		mutationKey: ['register'],
		mutationFn: (body: Record<string, unknown>) => {
			return registerUserUseCase(apiFetcher, body);
		},
		onSuccess: (data) => {
			setUser(data);
			login(data); 
		}
	});

	return {
		registerMutation,
	};
};
