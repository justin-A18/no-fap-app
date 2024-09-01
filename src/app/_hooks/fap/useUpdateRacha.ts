"use client";

import { useStore } from "@/app/_providers";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { updateRachaUseCase } from "@/core/use-cases/fap";
import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "usehooks-ts";

export const useUpdateRacha = () => {

	const [racha, setRacha] = useLocalStorage<number>('racha', 0);
	const { updateRacha } = useStore();

	const updateRachaMutation = useMutation({
		mutationKey: ['update-racha'],
		mutationFn: (body: Record<string, unknown>) => {
			return updateRachaUseCase(apiFetcher, body);
		},
		onSuccess: (data) => {
			setRacha(data.racha);
			updateRacha(data.racha);
		}
	});

	return {
		updateRachaMutation
	};
};
