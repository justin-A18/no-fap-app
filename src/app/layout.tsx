import { Poppins } from 'next/font/google';

import { TanStackProvider } from './_providers/TanStackProvider';
import type { Metadata } from 'next';
import { cn } from './_lib/utils';
import './globals.css';
import { NavBar } from './_components/shared/navbar';
import { Footer } from './_components/shared/footer';

const poppins = Poppins({ weight: ['300', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Desafío No FAP - Mejora tu Fuerza de Voluntad y Gana Premios',
	description:
		'Únete al desafío No Fap, supera tus límites, mejora tu fuerza de voluntad y gana premios increíbles. Descubre cómo alcanzar tus metas mientras te diviertes.',
	keywords:
		'No Fap, fuerza de voluntad, desafío, premios, superación personal, salud mental, crecimiento personal',
	icons: {
		icon: '/logo.svg',
	},
	authors: [{ name: 'pecausa.oficial' }],
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
					<Footer />
				</TanStackProvider>
			</body>
		</html>
	);
}
