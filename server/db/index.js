const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('./config');

const env = process.env.NODE_ENV || 'development';
const db_config = config[env];

const database = (logger) => {

	const sequelize = new Sequelize(db_config);

	sequelize.authenticate().then(() => {
			logger.info('Connection to the database has been established successfully!');
		}).catch((err) => {
			logger.error('Unable to connect to the database:', err);
			throw new Error();
		});

	const db = {};

	const modelsDir = path.join(__dirname, '/models');

	fs.readdirSync(modelsDir).filter((file) => {
			return (file.indexOf(".") !== 0) && (file !== "index.js");
		})
		.forEach((file) => {
			const model = sequelize.import(path.join(modelsDir, file));
			db[model.name] = model;
		});

	db.sequelize = sequelize;
	db.Sequelize = Sequelize;

	return db;
};

module.exports = database;
