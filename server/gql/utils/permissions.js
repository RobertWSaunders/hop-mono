const createResolver = (resolver) => {
	const baseResolver = resolver;
	baseResolver.createResolver = (childResolver) => {
		const newResolver = async (parent, args, context) => {
			await resolver(parent, args, context);
			return childResolver(parent, args, context);
		};
		return createResolver(newResolver);
	};
	return baseResolver;
};

const requiresAuth = createResolver((parent, args, context) => {
	if (!context.userId) {
		throw new Error('Not authenticated!');
	}
});

module.exports = {
	requiresAuth
};
