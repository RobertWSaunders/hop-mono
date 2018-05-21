
const mutations = {
	authLogin: (_, args, { ctrs }) => {
		ctrs.auth.login(args).then((tokens) => {
			return tokens;
		});
	},
	authSignup: (_, args, { ctrs }) => {
		ctrs.auth.signup(args).then((tokens) => {
			return tokens;
		});
	},
	authRefresh: (_, args, { ctrs }) => {
		ctrs.auth.refresh(args).then((tokens) => {
			return tokens;
		});
	},
	authFacebook: (_, args, context) => {
		ctrs.fb.facebookAuth(args).then((tokens) => {
			return tokens;
		});
	}
};

module.exports = {
	mutations
};
