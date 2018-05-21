const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");
const typeDefs = require("./types");

module.exports = (logger) => {

	const schemaLogger = {
		log: (error) => logger.error(error)
	};

	return makeExecutableSchema({
		typeDefs,
		resolvers,
		logger: schemaLogger
	});
};

