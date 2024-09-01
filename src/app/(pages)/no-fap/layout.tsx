const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex items-center justify-center w-full min-h-[calc(100vh-5rem)]">
			<section className="w-[400px] px-4 py-8">{children}</section>
		</main>
	);
};

export default layout;
