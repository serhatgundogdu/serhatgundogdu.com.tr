import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getCatPhotoData = async () => {
	const catsGQL = gql`
		{
			catPhotos {
				cat
				id
				photo {
					url
				}
			}
		}
	`;

	const { catPhotos } = await graphcms.request(catsGQL);
	return catPhotos;
};
