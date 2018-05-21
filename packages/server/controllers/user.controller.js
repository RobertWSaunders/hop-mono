
module.exports = (db, logger) => ({
	getUser: (id) => {
		return new Promise((resolve, reject) => {
			const user = db.User.find({ where: { id }});
			resolve(user);
		});
	},

	deleteUser: (id) => {

	},

	updateUser: (id, userInfo) => {

	},

	createUser: (userInfo) => {
		return new Promise((resolve, reject) => {
			const user = db.User.create(userInfo);
			resolve(user);
		});
	}

});
