const { isAuthenticatedResolver } = require('../utils/baseResolvers');
const pubsub = require('../utils/pubsub');

const subscriptionKeys = {
	userAdded: 'USER_ADDED',
	userDeleted: 'USER_DELETED',
	userUpdated: 'USER_UPDATED'
};

const subscriptions = {
	userAdded: {
		subscribe: () => pubsub.asyncIterator(subscriptionKeys.userAdded)
	},
	userDeleted: {
		subscribe: () => pubsub.asyncIterator(subscriptionKeys.userDeleted)
	},
	userUpdated: {
		subscribe: () => pubsub.asyncIterator(subscriptionKeys.userUpdated)
	}
};

const queries = {
	getUser: isAuthenticatedResolver.createResolver((_, { id }, { ctrs }) => {
		ctrs.user.getUser(id).then((user) => {
			return user;
		});
	})
};

const mutations = {
	userDelete: isAuthenticatedResolver.createResolver((_, { id }, { ctrs }) => {
		ctrs.user.deleteUser(id).then((deletedUser) => {
			pubsub.publish(subscriptionKeys.userDeleted, {
				userDeleted: deletedUser
			});
			return deletedUser;
		});
	}),

	userUpdate: isAuthenticatedResolver.createResolver(
		(_, { id, userInfo }, { ctrs }) => {
			ctrs.user.updateUser(id, userInfo).then((updatedUser) => {
				pubsub.publish(subscriptionKeys.userUpdated, {
					userUpdated: updatedUser
				});
				return updatedUser;
			});
		}
	),

	userCreate: isAuthenticatedResolver.createResolver(
		(_, { userInfo }, { ctrs }) => {
			ctrs.user.createUser(userInfo).then((userCreated) => {
				pubsub.publish(subscriptionKeys.userAdded, {
					userAdded: userCreated
				});
				return userCreated;
			});
		}
	)
};

module.exports = {
	subscriptionKeys,
	subscriptions,
	mutations,
	queries
};
