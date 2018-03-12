const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList } = graphql;
//const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
	name: 'RootQueryType'
	/*fields: () => ({
		users: {
			type: new GraphQLList(UserType),
			resolve() {
				return;
			}
		}
	})*/
});

module.exports = RootQueryType;
