import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
	const router = useRouter();
	return (
		<header className="flex items-center justify-center h-16 max-w-5xl px-4 py-4 mx-auto mt-12 bg-transparent ">
			<nav className="flex font-semibold text-gray-500 gap-x-4 text-bold ">
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
				<Link href="/cats">
					<a
						className={`transition duration-500 hover:text-white ${
							router.pathname == "/cats" && "text-white"
						}`}
					>
						Hera&Maya
					</a>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
