import { TiktokIcon } from './TiktokIcon';
import { XIcon } from './XIcon';

export const Footer = () => {
	return (
		<footer className='flex items-center flex-col gap-4 md:flex-row justify-between mx-auto max-w-[600px] text-center p-4'>
			<span> © 2024 Desafío No FAP | Todos los derechos reservados.</span>

			<ul className='flex items-center gap-2'>
				<li>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://x.com/PecausaO'>
						<XIcon />
					</a>
				</li>

				<li>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.tiktok.com/@pecausa.oficial?is_from_webapp=1&sender_device=pc'>
						<TiktokIcon />
					</a>
				</li>
			</ul>
		</footer>
	);
};
