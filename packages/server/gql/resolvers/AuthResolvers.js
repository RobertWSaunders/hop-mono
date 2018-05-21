
const mutations = {
	authLogin: (_, { email, password }, { ctrs }) => {
		ctrs.auth.login({ email, password }).then((tokens) => {
			return tokens;
		});
	},
	authSignup: (_, args, { ctrs }) => {
		const { firstName, lastName, email, password } = args.signupInfo;
		return ctrs.auth.signup({ firstName, lastName, email, password }).then((tokens) => {
			return tokens;
		});
	},
	authRefresh: (_, { refreshToken }, { ctrs }) => {
		ctrs.auth.refresh({ refreshToken }).then((tokens) => {
			return tokens;
		});
	},
	authFacebook: (_, { facebookToken }, context) => {
		ctrs.fb.facebookAuth({ facebookToken }).then((tokens) => {
			return tokens;
		});
	}
};

module.exports = {
	mutations
};
