const types = `
	"""
	Input required to signup a new user.
	"""
	input SignupInfoInput {
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
		The users password.
		"""
		password: String!
	}

	"""
	Input required to log a user into the application.
	"""
	input LoginInfoInput {
		"""
		The users email.
		"""
		email: String!

		"""
		The users password.
		"""
		password: String!
	}

	"""
	Input required to authenticate with Facebook.
	"""
	input FacebookAuthInfoInput {
		"""
		Client Facebook authentication token.
		"""
		facebookToken: String!
	}

	"""
	Input to required to refresh tokens.
	"""
	input RefreshTokenInfoInput {
		"""
		The refresh token to verify token refresh.
		"""
		refreshToken: String!
	}

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

		"""
		The user that has been authenticated.
		"""
		user: User
	}
`;

const mutations = `
	"""
	Authenticates a user, given proper login information.
	"""
	authLogin(loginInfo: LoginInfoInput!): AuthInfo!

	"""
	Signup a new user, given proper signup information.
	"""
	authSignup(signupInfo: SignupInfoInput!): AuthInfo!

	"""
	Refreshes a refresh token, given proper refresh token information.
	"""
	authRefresh(refreshToken: RefreshTokenInfoInput!): AuthInfo!

	"""
	Authenticates a user utilizing Facebook, given proper Facebook authentication information.
	"""
	authFacebook(facebookAuthInfo: FacebookAuthInfoInput!): AuthInfo!
`;

module.exports = {
	types,
	mutations
};
