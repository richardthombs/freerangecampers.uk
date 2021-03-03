import Head from 'next/head'

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-900">
			<div className="container mx-auto">

				<div className="relative min-h-screen">
					<div className="absolute inset-0 bg-blue-200">
						<img className="h-full w-full object-cover" src="/splash.jpg" alt="Picture of a camper" />
					</div>

					<div className="absolute top-8 w-full">
						<h1 className="text-center text-white tracking-tight text-4xl font-extrabold sm:text-5xl lg:text-6xl">
							<div>Hit the open road and</div>
							<div>sleep under the stars</div>
						</h1>
					</div>

					<div className="absolute bottom-8 w-full text-center">
						<svg className="inline text-white opacity-50 w-12 sm:w-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</div>

				</div>

				<div className="h-96 bg-white">
				</div>
			</div>
		</div>
	);
}
