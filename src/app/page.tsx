import { InfoSection } from './_components/home/info-section/InfoSection';
import { HistorySection } from './_components/home/history-section';
import { AwardsSection } from './_components/home/awards-section';

export default function Home() {
	return (
		<main
			className='flex items-center flex-col justify-center max-w-[800px] 
			mx-auto w-full min-h-[calc(100vh-5rem)]'>
			<InfoSection />
			<HistorySection />
			<AwardsSection />
		</main>
	);
}
