import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const Forofor = () => {
	return (
		<Layout
			title={"Serhat Gündoğdu | 404 Not Found"}
			description={"404 Not Found"}
		>
			<main className="w-full h-full">
				<section className="absolute max-w-5xl pt-16 mx-auto text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:pt-8">
					<h1 className="font-extrabold text-8xl">404</h1>
					<h2 className="mb-2 text-3xl font-extrabold">Not Found</h2>
					<Link href={"/"}>
						<a className="px-5 py-2 font-semibold transition duration-300 bg-gray-700 rounded bg-opacity-80 hover:bg-opacity-50">
							Go Home Page
						</a>
					</Link>
				</section>
			</main>
		</Layout>
	);
};

export default Forofor;
