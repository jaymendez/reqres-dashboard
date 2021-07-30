import Repository from "./Repository";
import { IOptions } from "./types"; 
const resource = "/users";

const getUsers = async (options: IOptions) => {
  let query = `${resource}`;
	if (options) {
		const { page } = options;
		if (page) {
			query = `${query}?page=${page}`;
		}
	}
  const data = await Repository.get(query);
  return data;
};

export default {
  getUsers,
};
