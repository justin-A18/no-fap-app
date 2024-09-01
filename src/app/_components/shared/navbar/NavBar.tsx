'use client';

import { useHashActive } from '@/app/_hooks/useHashActive';
import { navLinks } from '@/config/consts/navLinks';
import Link from 'next/link';
import { FormatHelper } from '@/config/helpers';
import { useStore } from '@/app/_providers';
import { useEffect, useState } from 'react';

export const NavBar = () => {
	const { hashActive } = useHashActive();
	const { user } = useStore();

	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<header
			className='p-4 w-full'
			suppressHydrationWarning>
			<nav className='flex items-center justify-between'>
				<span className='text-2xl font-bold uppercase'>no fap</span>

				<ul className='items-center gap-6 bg-[#191919] hidden md:flex px-8 py-3 rounded-full text-sm'>
					{navLinks.map(({ label, href }) => (
						<li key={label}>
							<a
								href={href}
								className={`hover:text-[#D5F902] relative before:content-[""] 
                before:absolute before:block before:-bottom-3 before:left-1/2 
                before:-translate-x-1/2 before:scale-0 before:h-[3px] before:w-4 
                before:bg-[#D5F902] transition-colors duration-500 before:transition-all 
								before:duration-500 ${
									`/${hashActive}` === href
										? 'before:scale-100 text-[#D5F902]'
										: ''
								}`}>
								{label}
							</a>
						</li>
					))}
				</ul>

				{!user && isClient ? (
					<Link
						href='/auth/register'
						className='border border-[#D5F902] px-6 py-2 rounded-full
          hover:bg-[#D5F902] hover:text-[#191919] transition-colors
          duration-500 text-sm'>
						Register
					</Link>
				) : (
					<span
						className='rounded-full size-10 text-black font-bold flex 
					items-center justify-center bg-[#D5F902]'>
						{isClient && user ? FormatHelper.formatFirstName(user.name) : null}
					</span>
				)}
			</nav>
		</header>
	);
};
