import { TypographyH2, TypographyH3 } from '../typography';

interface Props {
	title: string;
	subTitle: string;
}

export const HeaderSection = ({ subTitle, title }: Props) => {
	return (
		<header className='flex flex-col gap-4 items-center'>
			<TypographyH2 className='flex items-center text-center lg:text-4xl md:gap-2 font-light'>
				{title}
				<img
					className='hidden md:block'
					src='/vector.svg'
					alt='vector'
				/>
			</TypographyH2>
			<TypographyH3 className='text-[#D5F902]'>{subTitle}</TypographyH3>
		</header>
	);
};
