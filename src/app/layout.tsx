import { Poppins } from 'next/font/google';

import { TanStackProvider } from './_providers/TanStackProvider';
import type { Metadata } from 'next';
import { cn } from './_lib/utils';
import './globals.css';
import { NavBar } from './_components/shared/navbar';

const poppins = Poppins({ weight: ['300', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'No FAP',
	description:
		'Únete al desafío del "No Fap" y pon a prueba tu fuerza de voluntad para sobrevivir y ganar premios increíbles. Compite, supera tus límites y alcanza tus metas mientras te diviertes en el camino. ¡Acepta el reto y demuestra de qué estás hecho!',
	icons: {
		icon: '/logo.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='es'
			className='scroll-smooth'>
			<head>
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9995418878392852'
					crossOrigin='anonymous'></script>
			</head>
			<body
				id='home'
				suppressHydrationWarning
				className={cn('scroll-pt-3', poppins.className)}>
				<TanStackProvider>
					<NavBar />
					{children}
				</TanStackProvider>
			</body>
		</html>
	);
}
