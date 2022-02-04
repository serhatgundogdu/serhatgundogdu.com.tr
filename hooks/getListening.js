import axios from "axios";

export const getListeningData = async () => {
	const data = await axios
		.get(`https://api.lanyard.rest/v1/users/296699887771189248`)
		.then((res) => {
			return res.data.data;
		});

	return data;
};
