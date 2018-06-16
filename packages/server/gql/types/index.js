const UserType = require('./UserType');
const AuthType = require('./AuthType');

// NOTE: Interfaces, unions and input types are types.
// There is no need to abstract them here as well,
// just include them in the types declaration.
const types = [];
const queries = [];
const mutations = [];
const subscriptions = [];

const schemas = [UserType, AuthType];

schemas.forEach((s) => {
	if (s.types) types.push(s.types);
	if (s.queries) queries.push(s.queries);
	if (s.mutations) mutations.push(s.mutations);
	if (s.subscriptions) subscriptions.push(s.subscriptions);
});

module.exports = `

	${types.join("\n")}

	"""
	The Root Subscription type definition. Subscriptions allow our clients to be
	notfied of things that change on the server side without having to explicitly
	ask for it. Serves as the entrypoint for all other GraphQL subscriptions.
	"""
	type RootSubscription {
		${subscriptions.join("\n")}
	}

	"""
	The Root Query type definition. Queries allow our clients to query (retrieve)
	the information they need. Clients must adhere to a queries required arguments.
	Serves as the entrypoint for all other GraphQL queries.
	"""
	type RootQuery {
		${queries.join("\n")}
	}

	"""
	The Root Mutation type definition. Mutations allow our clients to mutate
	(modify) information however they want. Serves as the entrypoint for all
	other GraphQL mutations.
	"""
	type RootMutation {
		${mutations.join("\n")}
	}

	schema {
		query: RootQuery
		mutation: RootMutation
		subscription: RootSubscription
	}
`;
