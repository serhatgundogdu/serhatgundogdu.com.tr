import React from "react";
import Layout from "../../components/Layout";
import { getCatPhotoData } from "../../hooks/getCatPhotos";

const Cats = ({ cats }) => {
	return (
		<Layout title={"Serhat Gündoğdu | Hera & Maya"} description={"My Cats"}>
			<main className="w-full h-full">
				<section className="h-full max-w-5xl pt-16 mx-auto md:pt-8">
					<div className="w-full space-y-4 columns-1 md:columns-3">
						{cats.map((cat) => (
							<img
								key={cat.id}
								src={cat.photo.url}
								alt={cat.cat}
								className="w-full"
							/>
						))}
					</div>
				</section>
			</main>
		</Layout>
	);
};

export const getServerSideProps = async () => {
	const cats = await getCatPhotoData();
	console.log(cats);
	return {
		props: {
			cats,
		},
	};
};

export default Cats;
