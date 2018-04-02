module.exports = (sequelize, DataTypes) => {
	const LocalAuth = sequelize.define('local_auth', {
		email: {
			primaryKey: true,
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.STRING
		}
	});

	LocalAuth.associate = (models) => {
		LocalAuth.belongsTo(models.User, {
			foreignKey: 'user_id'
		});
	};

	return LocalAuth;
};
