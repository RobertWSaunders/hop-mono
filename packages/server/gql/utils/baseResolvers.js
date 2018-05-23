const { isInstance } = require("apollo-errors");
const { createResolver } = require('apollo-resolvers');
const { createError } = require("apollo-errors");

const UnknownError = createError("UnknownError", {
	message: "An unknown error has occurred!"
});

const AuthenticationRequiredError = createError("AuthenticationRequiredError", {
	message: "You must be authenticated to perform this action."
});

const baseResolver = createResolver(
	null,
	(parent, args, context, error) => isInstance(error) ?
		error :
		new UnknownError()
);

const isAuthenticatedResolver = baseResolver.createResolver(
	(parent, args, { userId }, info) => {
		if (!userId) throw new AuthenticationError();
	}
);

module.exports = {
	baseResolver,
	isAuthenticatedResolver
};
