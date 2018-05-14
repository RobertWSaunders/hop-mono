const { Router } = require('express');

const AUTH = 'auth';

module.exports = (ctr) => {
	const authAPI = Router();

	const { auth } = ctr;

	authAPI.use(`/${AUTH}/refresh`, (req, res) => {
		auth.refresh()
	});

	return authAPI;
};
