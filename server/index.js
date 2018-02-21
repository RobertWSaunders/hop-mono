const express = require('express');
// const models = require('./models');
// const expressGraphQL = require('express-graphql');
// const session = require('express-session');
// const passport = require('passport');
// const passportConfig = require('./services/auth');
// const bodyParser = require('body-parser');
// const schema = require('./schema/schema');

require('dotenv').config();

const app = express();

// const sequelize = new Sequelize('hop_stage_database', 'username', 'password', {
//   dialect: 'postgres',
//   host: 'my.server.tld'
// });
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// // need to read up on passport
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: 'aaabbbccc'
// }));
// app.use(passport.initialize());
// app.use(passport.session());
//
// app.use('/graphql', expressGraphQL({
//   schema,
//   graphiql: true
// }));
//
// const webpackMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config.js');
// app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(4000, () => {
  console.log('Listening');
});
