const authController = require('./auth.controller');

module.exports = (db) => ({
	auth: authController(db)
});
