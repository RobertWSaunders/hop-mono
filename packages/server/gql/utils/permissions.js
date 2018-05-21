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

// NOTE: As per GraphQL best practices it is best to leave auth to business layer.
// i.e. pass context to controllers but this will suffice for now as it private api.
const requiresAuth = createResolver((parent, args, context) => {
	if (!context.userId) {
		throw new Error('Not authenticated!');
	}
});

module.exports = {
	requiresAuth
};
