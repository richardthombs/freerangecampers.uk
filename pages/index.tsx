import Head from 'next/head'

export default function Home() {
	return (
		<div className="container mx-auto sm:px-6 lg:px-8">
			<div className="relative min-h-screen">
				<div className="absolute inset-0">
					<img className="h-full w-full object-cover" src="/splash.jpg" alt="Picture of a camper" />
				</div>

				<div className="absolute bottom-32 sm:bottom-8 w-full">
					<h1 className="text-center text-white opacity-90 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
						<div className="text-white opacity-90">Hit the open road and</div>
						<div className="text-white opacity-90">sleep under the stars</div>
					</h1>
				</div>

			</div>
		</div>
	);
}
