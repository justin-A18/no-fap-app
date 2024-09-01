'use client';

import { useCountDown } from '@/app/_hooks/useCountDown';
import { DateHelper } from '@/config/helpers';

export const Counter = () => {
	const { timeLeft } = useCountDown();

	return (
		<div className='flex items-center gap-5 md:gap-8'>
			<div className='flex items-center flex-col gap-1'>
				<span className='text-5xl'>
					{DateHelper.formatTime(timeLeft?.days ?? 0)}
				</span>
				<span className='md:text-2xl'>Days</span>
			</div>

			<div className='flex items-center flex-col gap-1'>
				<span className='text-5xl'>
					{DateHelper.formatTime(timeLeft?.hours ?? 0)}
				</span>
				<span className='md:text-2xl'>Hrs</span>
			</div>

			<div className='flex items-center flex-col gap-1'>
				<span className='text-5xl'>
					{DateHelper.formatTime(timeLeft?.minutes ?? 0)}
				</span>
				<span className='md:text-2xl'>Min</span>
			</div>
			
			<div className='flex items-center flex-col gap-1'>
				<span className='text-5xl'>
					{DateHelper.formatTime(timeLeft?.seconds ?? 0)}
				</span>
				<span className='md:text-2xl'>Seg</span>
			</div>
		</div>
	);
};
