const userResolvers = require('./UserResolvers');
const authResolvers = require('./AuthResolvers');
const resolvers = [userResolvers, authResolvers];

let queries = {};
let subscriptions = {};
let mutations = {};

resolvers.forEach((resolver) => {
	queries = Object.assign(queries, resolver.queries);
	subscriptions = Object.assign(subscriptions, resolver.subscriptions);
	mutations = Object.assign(mutations, resolver.mutations);
});

module.exports = {
	RootSubscription: subscriptions,
	RootQuery: queries,
	RootMutation: mutations
};
