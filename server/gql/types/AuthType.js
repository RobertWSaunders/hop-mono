const types = `
	"""
	The AuthInfo type definition. Includes tokens to be used for authentication.
	"""
	type AuthInfo {

		"""
		Access token to be used in requests requiring authentication.
		"""
		accessToken: String!

		"""
		Refresh token to be used refresh the access token if it has expired.
		"""
		refreshToken: String!
	}
`;

const queries = `

`;

const mutations = `
	"""
	Hey
	"""
	login(email: String!, password: String!): AuthInfo!

	"""
	Hey
	"""
	signup(email: String!, password: String!): AuthInfo!

	"""
	"""
	refresh(refresgToken: String!): AuthInfo!

	"""
	Hey
	"""
	facebookAuth(token: String!): AuthInfo!
`;

module.exports = {
	types,
	queries,
	mutations
};
