module.exports = function(sequelize, DataTypes) {
	const User = sequelize.define('user', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		firstname: {
			type: DataTypes.STRING,
			notEmpty: true
		},
		lastname: {
			type: DataTypes.STRING,
			notEmpty: true
		}
	});
	return User;
};
