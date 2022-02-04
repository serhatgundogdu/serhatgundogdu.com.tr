import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getProjects = async () => {
	const projectsGQL = gql`
		{
			projects {
				id
				image {
					url
				}
				slug
				name
				tags
				description
				demo
			}
		}
	`;

	const { projects } = await graphcms.request(projectsGQL);
	return projects;
};

export const getProject = async (slug) => {
	const projectsGQL = gql`
		query getProjet($slug: String!) {
			project(where: { slug: $slug }) {
				id
				image {
					url
				}
				name
				slug
				tags
				description
				demo
			}
		}
	`;

	const { project } = await graphcms.request(projectsGQL, {
		slug,
	});
	return project;
};
