import { TypographyH1, TypographyH2 } from '../../typography';

export const HeadSection = () => {
	return (
		<header className='flex items-center flex-col gap-3'>
			<TypographyH1 className='flex items-center text-center md:gap-2 font-light'>
				Desafiate, Pruebate a ti mismo
				<img
					className='hidden md:block'
					src='/vector.svg'
					alt='vector'
				/>
			</TypographyH1>
			<TypographyH2 className='text-[#D5F902]'>Septiembre sin FAP</TypographyH2>
		</header>
	);
};
