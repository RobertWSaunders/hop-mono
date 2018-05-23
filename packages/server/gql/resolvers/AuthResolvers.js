const { baseResolver } = require('../utils/baseResolvers');
const { createError } = require("apollo-errors");

const errors = {
	'AUTH_SIGNUP_ERROR': 'AuthSignupError'
};

const mutations = {
	authLogin: baseResolver.createResolver((_, { email, password }, { ctrs }) => {
		ctrs.auth.login({ email, password }).then((tokens) => {
			return tokens;
		});
	}),

	authSignup: baseResolver.createResolver((_, args, { ctrs }) => {
		const { firstName, lastName, email, password } = args.signupInfo;
		return ctrs.auth.signup({ firstName, lastName, email, password }).then((tokens) => {
			return tokens;
		}).catch((err) => {
			const AuthSignupError = createError(errors.AUTH_SIGNUP_ERROR, {
				message: 'Could not signup the user!'
			});
			throw new AuthSignupError({
				data: {
					controllerError: err
				}
			});
		});
	}),

	authRefresh: baseResolver.createResolver((_, { refreshToken }, { ctrs }) => {
		ctrs.auth.refresh({ refreshToken }).then((tokens) => {
			return tokens;
		});
	}),

	authFacebook: baseResolver.createResolver((_, { facebookToken }, context) => {
		ctrs.fb.facebookAuth({ facebookToken }).then((tokens) => {
			return tokens;
		});
	})
};

module.exports = {
	mutations
};
