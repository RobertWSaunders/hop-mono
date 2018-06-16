const authController = require("./auth.controller");
const userController = require("./user.controller");
const facebookController = require("./integrations/facebook.controller");

module.exports = (db, logger) => ({
	auth: authController(db, logger),
	user: userController(db, logger),
	fb: facebookController(db, logger)
});
