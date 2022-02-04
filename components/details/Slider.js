import React from "react";

const Slider = ({ images }) => {
	return (
		<div className="flex flex-nowrap  overflow-hidden">
			<div className="overflow-auto max-h-[calc(400vh/6)] rounded-xl md:rounded-2xl w-full bg-gray-100 flex-[0_0_100%]">
				<img
					src={images[0]?.url}
					alt=""
					className="rounded-xl md:rounded-2xl"
				/>
			</div>
			<div className="overflow-auto max-h-[calc(400vh/6)] rounded-xl md:rounded-2xl w-full bg-gray-100 flex-[0_0_100%]">
				<img src="" alt="" className="rounded-xl md:rounded-2xl" />
			</div>
			<div className="overflow-auto max-h-[calc(400vh/6)] rounded-xl md:rounded-2xl w-full bg-gray-100 flex-[0_0_100%]">
				<img
					src={images[0]?.url}
					alt=""
					className="rounded-xl md:rounded-2xl"
				/>
			</div>
		</div>
	);
};

export default Slider;
