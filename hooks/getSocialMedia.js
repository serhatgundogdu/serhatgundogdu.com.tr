import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getSocialMediaData = async () => {
	const socialMediaGQL = gql`
		{
			socials {
				githubUrl
				instagramUrl
				linkedInUrl
				twitterUrl
				recommendedPlaylist
				recommendedPlaylistName
			}
		}
	`;

	const { socials } = await graphcms.request(socialMediaGQL);
	return socials;
};
