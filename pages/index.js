import Layout from "../components/Layout";
import SocialMediaIcon from "../components/SocialMediaIcon";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillTwitterCircle,
	AiFillInstagram,
} from "react-icons/ai";

import { BsSpotify } from "react-icons/bs";
import { getSocialMediaData } from "../hooks/getSocialMedia";
import { getListeningData } from "../hooks/getListening";

export default function HomePage({ socialMedia, spotify }) {
	return (
		<Layout title={"Serhat Gündoğdu"} description={"My Portfolio"}>
			<main className="justify-center w-full h-full ">
				<section className="h-full max-w-5xl pt-16 mx-auto text-center md:pt-8 ">
					<span className="inline-block w-24 h-24 bg-blue-100 rounded-full"></span>
					<h1 className="mt-3 text-xl font-extrabold tracking-normal md:text-3xl ">
						I&apos;m Serhat Gündoğdu
					</h1>
					<span className="mt-5 text-3xl font-normal text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text md:mt-3">
						Fullstack Developer
					</span>
				</section>
				<section className="flex justify-center mt-8 gap-x-4 md:mt-4">
					<SocialMediaIcon
						href={socialMedia?.instagramUrl}
						Icon={AiFillInstagram}
					></SocialMediaIcon>
					<SocialMediaIcon
						href={socialMedia?.twitterUrl}
						Icon={AiFillTwitterCircle}
					></SocialMediaIcon>
					<SocialMediaIcon
						href={socialMedia?.linkedInUrl}
						Icon={AiFillLinkedin}
					></SocialMediaIcon>
					<SocialMediaIcon
						href={socialMedia?.githubUrl}
						Icon={AiFillGithub}
					></SocialMediaIcon>
				</section>
				<section className="flex justify-center mt-8 gap-x-4">
					<div className="flex items-center justify-between w-full max-w-lg px-12 py-4 text-white bg-gray-800 rounded-md bg-opacity-40 ">
						{spotify.listening_to_spotify ? (
							<div>
								<h3 className="flex mb-3 text-xl font-semibold gap-x-2 text-[#1DB954]">
									<BsSpotify className=" w-7 h-7" />
									Currenly Listening
								</h3>
								<a
									className="flex flex-col text-2xl font-bold transition-colors duration-400 hover:text-gray-300"
									href={`https://open.spotify.com/track/${spotify?.spotify?.track_id}`}
								>
									<h4>{spotify?.spotify?.song}</h4>
									<span className="-mt-1 text-xl font-semibold">
										{spotify?.spotify?.artist}
									</span>
								</a>
							</div>
						) : (
							<div>
								<h3 className="flex mb-3 text-xl font-semibold gap-x-2 text-[#1DB954]">
									<BsSpotify className=" w-7 h-7" />
								        Currenly Listening
								</h3>
								<a
									className="text-2xl font-bold transition-colors duration-400 hover:text-gray-300"
				
								>
									Offline
								</a>
							</div>
						)}
					</div>
				</section>

				<section className="flex justify-center mt-8 gap-x-4">
					<div className="flex items-center justify-between w-full max-w-lg px-12 py-4 text-gray-500 bg-gray-800 rounded-md bg-opacity-40 ">
						<div>
							<h3 className="text-lg font-bold">Izmir, Turkey</h3>
							<a
								className="transition-colors duration-400 hover:text-white"
								href="mailto:serhat.gundogdu@outlook.com"
							>
								serhat.gundogdu@outlook.com
							</a>
						</div>
						<a
							href="mailto:serhat.gundogdu@outlook.com"
							className="font-semibold text-white transition duration-200 hidden md:block hover:bg-[#4561d1] p-2 px-4 rounded-full bg-[#5F7FFF] "
						>
							Contact
						</a>
					</div>
				</section>
			</main>
		</Layout>
	);
}

export const getServerSideProps = async () => {
	let spotify = await getListeningData();
	const socialMedia = await getSocialMediaData();

	return {
		props: {
			socialMedia: socialMedia[0],
			spotify,
		},
	};
};
