module.exports = function(sequelize, Sequelize) {
	const User = sequelize.define('user', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		firstname: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		lastname: {
			type: Sequelize.STRING,
			notEmpty: true
		}
	});

	return User;
};
