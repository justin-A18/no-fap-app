'use client';

import { DateHelper } from "@/config/helpers";
import { useEffect, useState } from "react";

export const useCountDown = () => {
	const calculateTime = DateHelper.calculateTimeLeft();
	const [timeLeft, setTimeLeft] = useState<typeof calculateTime>();

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(calculateTime);
		}, 1000);

		return () => clearInterval(interval);
	}, [calculateTime]);


	return {
		timeLeft
	};
};
