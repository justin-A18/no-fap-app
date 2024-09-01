'use client';

import { useEffect, useState } from 'react';

export const useHashActive = () => {
	const [hashActive, setHashActive] = useState<string>('#home');

	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash;
			setHashActive(hash);
		};

		window.addEventListener('hashchange', handleHashChange);

		handleHashChange();

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, []);


	return {
		hashActive,
	};
};
