import Link from "next/link";
import React from "react";

const ProjectItem = ({ project }) => {
	return (
		<div className="w-full h-full ">
			<div className="flex flex-col h-full bg-gray-800 rounded-lg bg-opacity-40 group">
				<img
					src={project?.image[0]?.url}
					className="object-cover object-top w-full h-64 transition-all duration-1000 ease-in transform rounded-t-lg max-h-64 group-hover:object-bottom"
				/>
				<a
					href={project?.demo || null}
					target={"_blank"}
					className="flex flex-col p-2"
				>
					<h3 className="mt-1 mb-2 text-2xl font-semibold text-center transition duration-200 group-hover:text-gray-300">
						{project.name}
					</h3>
					<p className="mb-2 text-gray-400 ">{project.description}</p>
					<div className="h-full mt-auto mb-2">
						<div className="flex justify-center w-full gap-2">
							{project.tags.map((tag) => (
								<span
									className="bg-[#fff] px-2 py-1 inline-flex items-center justify-center text-sm rounded font-medium text-black"
									key={tag}
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default ProjectItem;
