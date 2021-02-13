import Repository from "./Repository";

// const resource = "/movies";

const getMovies = async ({}) => {
	const data = await Repository.get("/");
	return data;
};

export default {
	getMovies,
};
