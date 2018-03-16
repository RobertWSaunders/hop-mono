const types = `
	"""
	The User type definition. A user is someone that uses our application.
	"""
	type User {
		"""
		The users unique identifier.
		"""
		id: Int!

		"""
		The users first name.
		"""
		firstname: String!

		"""
		The users last name.
		"""
		lastname: String!
	}
`;

const queries = `
	"""
	Retrieves a user if supplied proper arguments.
	"""
	getUser(firstname: String!, lastname: String!): User!
`;

const mutations = `
	"""
	Creates a user if supplied proper arguments.
	"""
	createUser(firstname: String!, lastname: String!): User!
`;

const subscriptions = `
	"""
	Publishes when a new user is created or added to the database.
	"""
	userAdded: User!
`;

module.exports = {
	types,
	queries,
	mutations,
	subscriptions
};
