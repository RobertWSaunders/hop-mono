const winston = require('winston');

const customLevels = {
	levels: {
		error: 0,
		warn: 1,
		info: 2,
		verbose: 3
	},
	colors: {
		error: 'red',
		warn: 'yellow',
		info: 'green',
		verbose: 'blue'
	}
};

const logger = winston.createLogger({
	levels: customLevels.levels,
	transports: [
		new winston.transports.Console({ format:
			winston.format.combine(
				winston.format.colorize(),
				winston.format.timestamp(),
				winston.format.simple()
			)
		}),
		new winston.transports.File({ filename: 'server/logs/error.log', level: 'error' })
	],
	exceptionHandlers: [
		new winston.transports.File({ filename: 'server/logs/exceptions.log' })
	]
});

winston.addColors(customLevels);

module.exports = logger;
