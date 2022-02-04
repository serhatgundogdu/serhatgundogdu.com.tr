import React from "react";
import Layout from "../../components/Layout";
import ProjectItem from "../../components/ProjectItem";
import { getProjects } from "../../hooks/getProjects";

const ProjectsPage = ({ projects }) => {
	return (
		<Layout title={"Serhat Gündoğdu | Projects"} description={"My Portfolio"}>
			<main className="w-full h-full">
				<section className="h-full max-w-5xl pt-16 mx-auto text-center md:pt-8">
					<h1 className="mt-3 text-xl font-extrabold tracking-normal md:text-3xl">
						My Projects
					</h1>

					<div className="grid grid-cols-1 gap-2 mt-4 md:mt-8 md:grid-cols-2">
						{projects.map((project) => (
							<ProjectItem key={project.id} project={project} />
						))}
					</div>
				</section>
			</main>{" "}
		</Layout>
	);
};

export const getServerSideProps = async () => {
	const projects = await getProjects();

	return {
		props: {
			projects,
		},
	};
};

export default ProjectsPage;
