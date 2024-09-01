'use client';

import Link from 'next/link';

import { ImageSection } from './ImageSection';
import { HeadSection } from './HeadSection';
import { Counter } from './Counter';
import { useStore } from '@/app/_providers';
import { useEffect, useState } from 'react';

export const InfoSection = () => {
	const { user } = useStore();

	const [href, setHref] = useState('/auth/register');

	useEffect(() => {
		setHref(user && user.name !== '' ? '/no-fap' : '/auth/register');
	}, [user]);

	return (
		<section className='py-10 px-4 relative flex justify-center items-center flex-col gap-8'>
			<HeadSection />

			<ImageSection />
			<Counter />

			<Link
				href={href}
				className='border border-[#D5F902] hover:bg-[#D5F902] hover:text-black 
        px-6 py-3 rounded-full transition-colors duration-500'>
				Aceptar el reto
			</Link>
		</section>
	);
};
