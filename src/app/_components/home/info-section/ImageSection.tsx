import Image from "next/image";

export const ImageSection = () => {
	return (
		<div className='relative flex items-center justify-center'>
			<div
				className='gradient size-32 blur-3xl rounded-full block absolute 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'></div>

			<Image
				src='/gancito.png'
				alt='gancito'
				width={200}
				height={200}
			/>
		</div>
	);
};
