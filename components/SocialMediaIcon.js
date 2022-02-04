import React from "react";

const SocialMediaIcon = ({ Icon, color, href }) => {
	return (
		<a
			href={href || ""}
			target="_blank"
			rel="noreferrer"
			className={`rounded-full p-1 hover:bg-black transition-all duration-700 flex items-center justify-center ${
				color ? `bg-${color}` : "bg-white"
			}`}
		>
			<Icon className="w-8 h-8 text-black hover:text-white" />
		</a>
	);
};

export default SocialMediaIcon;
