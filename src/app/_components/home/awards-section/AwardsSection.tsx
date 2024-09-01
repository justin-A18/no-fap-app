import { HeaderSection } from '../../shared/HeaderSection';
import { CardsAwards } from './CardsAwards';

export const AwardsSection = () => {
	return (
		<section
			id='premios'
			className='py-16 px-4 flex items-center flex-col gap-8 relative'>
			<HeaderSection
				title='Conoce los premios'
				subTitle='Suscripciones en:'
			/>

			<div
				className='gradient size-32 blur-3xl rounded-full block absolute 
        top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'></div>

			<CardsAwards />
		</section>
	);
};
