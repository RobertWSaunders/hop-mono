
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
			const { firstName, lastName, email } = userInfo;
			const user = db.User.create({
				firstName,
				lastName,
				email
			});
			return resolve(user);
		});
	}
});
