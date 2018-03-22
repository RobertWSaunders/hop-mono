const { Router } = require('express');
const authRoutes = require('./routes/auth.routes');

module.exports = (ctrs) => {
	const api = Router();

	api.use('/', authRoutes(ctrs));

	return api;
};
