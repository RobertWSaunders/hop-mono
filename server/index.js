require('dotenv').config();
const expressGraphQL = require('express-graphql');
const compression = require('compression');
const schema = require('./schema/schema');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const db = require('./db')(logger);
const express = require('express');
const path = require('path');

const IS_PROD = process.env.NODE_ENV === 'production';
const FORCE_SSL = process.env.FORCE_SSL === 'true';

const app = express();
const port = process.env.PORT || 3000;

const BUNDLE_DIR = path.join(__dirname, '../client/bundle');

db.sequelize.sync().then(() => {
	logger.info('Database has synchronized successfully!');
}).catch((err) => {
	logger.error('Something went wrong with the database synchronization!', err);
});

app.use(compression());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

if (IS_PROD) {
	if (FORCE_SSL) {
		app.enable('trust proxy');
		app.use((req, res, next) => {
				if (req.secure) {
					next();
				} else {
					res.redirect('https://' + req.headers.host + req.url);
				}
		});
	}
}

app.use('/graphql', expressGraphQL({
	schema,
	graphiql: true
}));

app.use(express.static(BUNDLE_DIR));

app.listen(port, () => {
	logger.info('Server is running and is listening!');
});
