'use client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu';

import { useHashActive } from '@/app/_hooks/useHashActive';
import { navLinks } from '@/config/consts/navLinks';
import { FormatHelper } from '@/config/helpers';
import { useStore } from '@/app/_providers';
import { useEffect, useState } from 'react';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const NavBar = () => {
	const { hashActive } = useHashActive();
	const { user, logout } = useStore();

	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	const router = useRouter();

	const handleLogout = () => {
		logout()
		router.push('/auth/register');
	}

	return (
		<header
			className='p-4 w-full'
			suppressHydrationWarning>
			<nav className='flex items-center justify-between'>
				<Link
					href='/'
					className='text-2xl font-bold uppercase'>
					no fap
				</Link>

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

				{!user && isClient || user?.name === '' ? (
					<Link
						href='/auth/register'
						className='border border-[#D5F902] px-6 py-2 rounded-full
          hover:bg-[#D5F902] hover:text-[#191919] transition-colors
          duration-500 text-sm'>
						Register
					</Link>
				) : (
					<DropdownMenu>
						<DropdownMenuTrigger>
							<span
								className='rounded-full size-10 text-black font-bold flex 
					items-center justify-center bg-[#D5F902]'>
								{isClient && user
									? FormatHelper.formatFirstName(user.name)
									: null}
							</span>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className='-right-2 top-0 absolute bg-[#D5F902] 
						border-none'>
							<DropdownMenuItem
								className='focus:bg-[#D5F902]/80 
							flex items-center gap-2 cursor-pointer'
								onClick={handleLogout}>
								<LogOut /> Logout
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</nav>
		</header>
	);
};
