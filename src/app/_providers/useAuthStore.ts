'use client';

import { UserResponse } from '@/infrastructure/interfaces/api.response';
import { create } from 'zustand';

interface Store {
	user: UserResponse;
	racha: number;
	login: (data: UserResponse) => void;
	logout: () => void;
	updateRacha: (racha: number) => void;
}

export const initialValue = { email: "", name: "", racha: 0 };

const storageData = typeof window != 'undefined' && localStorage.getItem('user')
	? JSON.parse(localStorage.getItem('user')!)
	: initialValue;

const storageRacha = typeof window != 'undefined' && localStorage.getItem('racha')
	? Number(localStorage.getItem('racha')!)
	: 0;

export const useStore = create<Store>()((set) => ({
	user: storageData,
	racha: storageRacha,
	login: (user) => set(() => ({ user })),
	logout: () => set((state) => {
		localStorage.clear();
		return { ...state, user: initialValue, racha: 0 };
	}),
	updateRacha: (racha) => set(() => ({ racha })),
}));