const types = `
	type User {
		id: Int!
		firstname: String!
		lastname: String!
	}
`;

const queries = `
	getUser(firstname: String!, lastname: String!): User!
`;

const mutations = `
	createUser(firstname: String!, lastname: String!): User!
`;

const subscriptions = `
	userAdded: User!
`;

module.exports = {
	types,
	queries,
	mutations,
	subscriptions
};
