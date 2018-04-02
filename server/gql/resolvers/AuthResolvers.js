
const mutations = {
	login: (parentValue, args, context) => {
		// is going to be provided a email and password
		// needs to check against the local auth table
		// sends back an authtype with access token and refresh token
	},
	signup: (parentValue, args, context) => {
		// sends in new user information including email and password
		// creates a user and adds in local auth info
		// sends back an auth tyoe with access token and refresh
	},
	refresh: (parentValue, args, context) => {
		// sends in a refresh token
		// validates against db table (where to put) with refresh token
		// if valid then we send back a new access token refresh token pair
	},
	facebookAuth: (parentValue, args, context) => {
		// sends in fb token in addition to fb email
		// we check against the fb auth table for a user and send back auth info
		// if no user then we create one and send back auth info
		// also checks local auth table for the email to see if an account was already create using local
	}
};

module.exports = {
	mutations
};
