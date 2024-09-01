'use client';

import { CustomAlert } from '@/app/_components/shared/alerts';
import { TypographyH1, TypographyH2 } from '@/app/_components/typography';
import { Button } from '@/app/_components/ui/button';
import { useUpdateRacha } from '@/app/_hooks/fap/useUpdateRacha';
import { useStore } from '@/app/_providers';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = () => {
	const { updateRachaMutation } = useUpdateRacha();
	const { user, racha } = useStore();

	const [isClient, setIsClient] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setIsClient(true);

		if (!user) {
			router.push('/auth/register');
		}
	}, []);

	const handleClick = () => {
		updateRachaMutation.mutate({
			identifier: user?.email,
		});
	};

	return (
		<div className='flex items-center flex-col gap-8'>
			<TypographyH1>Racha N°</TypographyH1>

			{updateRachaMutation.isError && (
				<CustomAlert variant='destructive'>
					{updateRachaMutation.error.message}
				</CustomAlert>
			)}

			{updateRachaMutation.isSuccess && (
				<CustomAlert variant='success'>
					{updateRachaMutation.data.message}
				</CustomAlert>
			)}

			<div className='relative size-32 flex items-center justify-center'>
				<img
					className='size-32 object-cover'
					src='/fire.svg'
					alt='fire'
				/>
				<span
					className='text-5xl absolute top-20 left-1/2 
				-translate-x-2/4 -translate-y-1/2 text-stroke'>
					{isClient ? racha || user?.racha || 0 : 0}
				</span>
			</div>

			<TypographyH2>Tú puedes soldado</TypographyH2>

			<Button
				className='bg-[#D5F902] text-black hover:bg-[#D5F902]/90 
			transition-all duration-500 text-lg'
				onClick={handleClick}>
				Hoy no me la jale
			</Button>
		</div>
	);
};

export default page;
