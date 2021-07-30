import UserRepository from "./UserRepository";
const repositories = {
	user: UserRepository,
};

export const RepositoryFactory = {
	get: (name) => repositories[name],
};
