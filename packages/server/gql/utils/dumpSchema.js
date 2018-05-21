const { printSchema } = require('graphql');
const schema = require('../schema')();
const fs = require('fs');

fs.writeFile("./gql/schema.graphql", printSchema(schema), (err) => {
	if (err) {
		return console.log(err);
	}
});

process.exit();
