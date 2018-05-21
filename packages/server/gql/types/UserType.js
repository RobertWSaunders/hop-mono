const types = `
	"""
	Input required to create a user.
	"""
	input UserInfoInput {
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
		dob: String
	}

	"""
	The User type definition. A user is someone that uses our application.
	"""
	type User {
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
		dob: String
	}
`;

const queries = `
	"""
	Retreives a user by the users unique identifier.
	"""
	getUser(id: ID!): User!
`;

const mutations = `
	"""
	Deletes a user, given the users identifier.
	"""
	userDelete(id: ID!): User!

	"""
	Updates a user by their unique identifier.
	"""
	userUpdate(id: ID!, userInfo: UserInfoInput!): User!

	"""
	Creates a user if supplied proper arguments.
	"""
	userCreate(userInfo: UserInfoInput!): User!
`;

const subscriptions = `
	"""
	Publishes when a new user is created.
	"""
	userAdded: User!

	"""
	Publishes when a user is deleted.
	"""
	userDeleted: User!

	"""
	Publishes when a user is updated.
	"""
	userUpdated: User!
`;

module.exports = {
	types,
	queries,
	mutations,
	subscriptions
};
