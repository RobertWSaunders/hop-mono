const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();

const subscriptionKeys = {
	userAdded: 'USER_ADDED'
};

const subscriptions = {
	userAdded: {
		subscribe: () => pubsub.asyncIterator(subscriptionKeys.userAdded)
	}
};

const queries = {
	getUser: (parent, { firstname }, { db }) => {
		return db.user.findOne({ where: { firstname }});
	}
};

const mutations = {
	createUser: async (parent, args, { db }) => {
		const userToAdd = await db.user.create(args);
		pubsub.publish(subscriptionKeys.userAdded, { userAdded: userToAdd });
		return userToAdd;
	}
};

module.exports = {
	RootSubscription: subscriptions,
	RootQuery: queries,
	RootMutation: mutations
};
