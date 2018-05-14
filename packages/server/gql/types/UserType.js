const types = `
	"""
	The User type definition. A user is someone that uses our application.
	"""
	type User implements Node {
		"""
		The users unique identifier.
		"""
		id: ID!

		"""
		The users first name.
		"""
		firstName: String!

		"""
		The users last name.
		"""
		lastName: String!

		"""
		The users email.
		"""
		email: String!

		"""
		The users date of birth.
		"""
		dob: Date!
	}

	type UserCreatePayload {

	}

	type UserDeletePayload {

	}

	type UserUpdatePayload {

	}
`;

const queries = `
	"""
	"""
	getUserByID(id: ID!): User!



	"""
	Retrieves a user if supplied proper arguments.
	"""
	getUser(firstname: String!, lastname: String!): User!
`;

const mutations = `

	"""
	Deletes a user, given the users identifier.
	"""
	userDelete(id: ID!): UserDeletePayload!

	"""
	Creates a user if supplied proper arguments.
	"""
	userCreate(firstName: String!, lastName: String!, email: String!, dob: Date): UserCreatePayload!

	"""
	Updates a user by their unique identifier.
	"""
	userUpdateByID(id: ID!): UserUpdatePayload!
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
