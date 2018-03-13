
const options = {
	operatorsAliases: false,
	logging: false
};

const config = {
	development: {
		database: 'hop-dev-database',
		host: 'localhost',
		dialect: 'postgres',
		...options
	},
	staging: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		dialect: 'postgres',
		...options
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		dialect: 'postgres',
		...options
	}
};

module.exports = config;
