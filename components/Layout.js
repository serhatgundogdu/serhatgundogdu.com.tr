import React from "react";
import Head from "next/head";
import Header from "./Header";
import Script from "next/script";

const Layout = ({ title, description, children, header = true }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta property="og:site_name" content="Portfolio" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<script
				data-name="BMC-Widget"
				data-cfasync="false"
				src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
				data-id="serhatgundogdu"
				data-description="Support me on Buy me a coffee!"
				data-message=""
				data-color="#5F7FFF"
				data-position="Right"
				data-x_margin="18"
				data-y_margin="18"
			></script>
			<div
				className={`relative z-10 min-h-screen px-3 pb-8 overflow-hidden antialiased text-white bg-gray-900 font-poppins bg-primary-light`}
			>
				<div className="w-full h-full">
					{header && <Header />}
					{children}
				</div>
			</div>
		</>
	);
};

export default Layout;
