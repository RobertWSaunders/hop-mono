const { requiresAuth } = require('../utils/permissions');
const pubsub = require('../utils/pubsub');

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
	createUser: requiresAuth.createResolver((parent, args, { db }) => {
		const userToAdd = db.user.create(args);
		pubsub.publish(subscriptionKeys.userAdded, { userAdded: userToAdd });
		return userToAdd;
	})
};

module.exports = {
	subscriptionKeys,
	subscriptions,
	queries,
	mutations
};
