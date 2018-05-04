const fs = require("fs");
const path = require("path");
const config = require("./config");
const Sequelize = require("sequelize");

const isProd = process.env.NODE_ENV === "production";
const db_env = process.env.DB_ENVIRONMENT || "development";
const db_config = config[db_env];

const database = (logger) => {
	if (isProd && process.env.INSTANCE_CONNECTION_NAME) {
		db_config.host = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
	}

	const sequelize = new Sequelize(db_config);

	sequelize
		.authenticate()
		.then(() => {
			logger.info(
				"Connection to the database has been established successfully!"
			);
		})
		.catch((err) => {
			logger.error("Unable to connect to the database:", err);
			throw new Error();
		});

	const db = {
		User: sequelize.import("./models/user"),
		FBAuth: sequelize.import("./models/fb_auth"),
		LocalAuth: sequelize.import("./models/local_auth"),
		RefreshToken: sequelize.import("./models/refresh_token")
	};

	Object.keys(db).forEach((modelName) => {
		if ("associate" in db[modelName]) {
			db[modelName].associate(db);
		}
	});

	db.sequelize = sequelize;
	db.Sequelize = Sequelize;

	return db;
};

module.exports = database;
