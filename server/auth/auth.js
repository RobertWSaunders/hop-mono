const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { AUTH_SECRET } = process.env;

module.exports = () => async (req, res, next) => {

	next();
};
