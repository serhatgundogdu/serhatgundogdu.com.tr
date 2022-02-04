import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
	const router = useRouter();
	return (
		<header className="flex items-center justify-center py-4 px-4 h-16 max-w-5xl mx-auto mt-12 bg-transparent ">
			<nav className="flex gap-x-4 text-gray-500 text-bold font-semibold ">
				<Link href="/">
					<a
						className={`transition duration-500 hover:text-white ${
							router.pathname == "/" && "text-white"
						}`}
					>
						Home
					</a>
				</Link>
				<Link href="/blog">
					<a
						className={`transition duration-500 hover:text-white ${
							router.pathname == "/blog" && "text-white"
						}`}
					>
						Blog
					</a>
				</Link>
				<Link href="/projects">
					<a
						className={`transition duration-500 hover:text-white ${
							router.pathname == "/projects" && "text-white"
						}`}
					>
						Projects
					</a>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
