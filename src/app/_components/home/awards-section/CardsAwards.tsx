import { CardAward } from './CardAward';

export const CardsAwards = () => {
	return (
		<div
			className='grid grid-cols-2 min-[500px]:grid-cols-3 
			md:grid-cols-4 gap-5'>
			<CardAward
				src='/netflix.svg'
				alt='netflix logo'
			/>
			<CardAward
				src='/disney.svg'
				alt='disney logo'
			/>
			<CardAward
				src='/amazon-prime.svg'
				alt='amazon-prime logo'
			/>
			<CardAward
				src='/hbo.svg'
				alt='hbo logo'
			/>
		</div>
	);
};
