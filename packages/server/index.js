require('dotenv').config();
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const history = require('connect-history-api-fallback');
const { execute, subscribe } = require('graphql');
const { formatError } = require('apollo-errors');
const logger = require("./utils/logger");
const schema = require("./gql/schema")(logger);
const bodyParser = require('body-parser');
const { createServer } = require('http');
const auth = require('./auth/auth');
const db = require('./db')(logger);
const express = require('express');
const path = require('path');
const cors = require('cors');

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

// Add CORS
app.use(cors());

// Authentication Middleware
app.use(auth(db));

// Controllers
const ctrs = require('./controllers')(db, logger);

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
		formatError,
		schema,
		context: {
			db,
			ctrs,
			userId: req.userId
		}
	}))
);

// Fallback if Required
app.use(history());

// Static Files
app.use(express.static(BUNDLE_DIR));

// HTTP Server
const server = createServer(app);

// Database Synchronization and Subcriptions Setup
// NOTE: We only do force true here for the sake of developing.
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
