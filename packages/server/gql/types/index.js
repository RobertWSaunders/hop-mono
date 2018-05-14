const UserType = require('./UserType');
const AuthType = require('./AuthType');

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

	scalar Date

	interface Node {
		id: ID!
	}

	type UserError {
		message: String!

		field: [String!]
	}

	${types.join('\n')}

	"""
	The Root Subscription type definition. Subscriptions allow our clients to be
	notfied of things that change on the server side without having to explicitly
	ask for it.
	"""
	type RootSubscription {
		${subscriptions.join('\n')}
	}

	"""
	The Root Query type definition. Queries allow our clients to query (retrieve)
	the information they need. Clients must adhere to a queries required arguments.
	"""
	type RootQuery {
		${queries.join('\n')}
	}

	"""
	The Root Mutation type definition. Mutations allow our clients to mutate
	(modify) information however they want.
	"""
	type RootMutation {
		${mutations.join('\n')}
	}

	schema {
		query: RootQuery
		mutation: RootMutation
		subscription: RootSubscription
	}
`;
