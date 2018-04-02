require('dotenv').config();
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { execute, subscribe } = require('graphql');
const bodyParser = require('body-parser');
const { createServer } = require('http');
const logger = require('./utils/logger');
const schema = require('./gql/schema');
const auth = require('./auth/auth');
const db = require('./db')(logger);
const express = require('express');
const path = require('path');
const api = require('./api');

const IS_PROD = process.env.NODE_ENV === 'production';
const FORCE_SSL = process.env.FORCE_SSL === 'true';
const port = process.env.PORT || 3000;

const BUNDLE_DIR = path.join(__dirname, '../client/bundle');

// Express Server
const app = express();

// HTTPS Redirect
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

// Authentication Middleware
app.use(auth(db));

// Controllers
const ctrs = require('./controllers')(db);

// Restful API Endpoints (Mainly Auth)
app.use('/api/', api(ctrs));

// GraphiQL IDE (Dev Only)
if (!IS_PROD) {
	app.use('/graphiql',
		graphiqlExpress({
			endpointURL: '/graphql',
			subscriptionsEndpoint: `ws://localhost:${port}/subscriptions`
		}),
	);
}

// GraphQL Endpoint
app.use('/graphql',
	bodyParser.json(),
	graphqlExpress((req, res) => ({
		schema,
		context: {
			db,
			ctrs,
			userId: req.userId
		}
	}))
);

// Static Files
app.use(express.static(BUNDLE_DIR));

// HTTP Server
const server = createServer(app);

// Database Synchronization and Subcriptions Setup
db.sequelize.sync({ force: true }).then(() => {
	logger.info('Database has synchronized successfully!');

	server.listen(port, () => {
		new SubscriptionServer({
				execute,
				subscribe,
				schema
			},
			{
				server,
				path: '/subscriptions'
			},
		);
	});
}).catch((err) => {
	logger.error('Database could not synchronize! Cannot start server.');
});
