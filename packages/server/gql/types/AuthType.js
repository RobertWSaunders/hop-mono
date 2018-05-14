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
	The
	"""
	authLogin(email: String!, password: String!): AuthInfo!

	"""
	Hey
	"""
	authSignup(email: String!, password: String!): AuthInfo!

	"""
	"""
	authRefresh(refresgToken: String!): AuthInfo!

	"""
	Hey
	"""
	authFacebook(token: String!): AuthInfo!
`;

module.exports = {
	types,
	queries,
	mutations
};
