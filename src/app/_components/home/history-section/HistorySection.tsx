import Link from 'next/link';
import { HeaderSection } from '../../shared/HeaderSection';
import { TypographyP } from '../../typography';
import { ChevronRight } from 'lucide-react';

export const HistorySection = () => {
	return (
		<section
			className='pt-16 relative px-4 flex flex-col items-center gap-4'
			id='nofap'>
			<HeaderSection
				title='Conoce la historia'
				subTitle='¿Que es No FAP?'
			/>

			<div
				className='gradient size-32 blur-3xl rounded-full block absolute 
        top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'></div>

			<TypographyP
				className='font-light max-w-[600px] text-gray-300 
					text-justify leading-relaxed word-spacing'>
				Comenzó como un reto en internet para aquellos valientes que querían
				probar su autocontrol y resistencia. Inspirado por el popular "No Nut
				November", este desafío invita a pasar todo septiembre sin ceder a la
				tentación de la pornografía o la masturbación. Lo que empezó como una
				broma en foros y redes sociales, rápidamente se convirtió en una
				comunidad global que busca mejorar su bienestar físico, mental y
				emocional, demostrando que la verdadera fuerza está en el autocontrol...
				¡y en mantener las manos ocupadas en otras cosas!
			</TypographyP>

			<Link
				href='https://somoskudasai.com/tag/septiembre-sin-fap/'
				target='_blank'
				rel='noopener noreferrer'
				className='border border-[#D5F902] hover:bg-[#D5F902] hover:text-black 
        px-6 py-3 rounded-full transition-colors duration-500 flex items-center'>
				Leer más <ChevronRight className='size-4' />
			</Link>
		</section>
	);
};
