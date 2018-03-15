const User = require('./User');

const types = [];
const queries = [];
const mutations = [];
const subscriptions = [];

const schemas = [User];

schemas.forEach((s) => {
  types.push(s.types);
  queries.push(s.queries);
  mutations.push(s.mutations);
	subscriptions.push(s.subscriptions);
});

module.exports = `
	${types.join('\n')}

	type RootSubscription {
		${subscriptions.join('\n')}
	}

	type RootQuery {
		${queries.join('\n')}
	}

	type RootMutation {
		${mutations.join('\n')}
	}

	schema {
		query: RootQuery
		mutation: RootMutation
		subscription: RootSubscription
	}
`;
