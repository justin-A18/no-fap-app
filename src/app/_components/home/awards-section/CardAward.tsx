import { cn } from '@/app/_lib/utils';

interface Props {
	src: string;
	alt: string;
	className?: string;
}

export const CardAward = ({ src, alt, className }: Props) => {
	return (
		<div
			className={cn(
				'card-award w-full h-24 px-4 flex items-center justify-center',
				className,
			)}>
			<img
				className='size-24 object-cover'
				src={src}
				alt={alt}
			/>
		</div>
	);
};
