module.exports = (sequelize, DataTypes) => {
	const RefreshToken = sequelize.define('refresh_token', {
		token: {
			primaryKey: true,
			type: DataTypes.STRING
		}
	});

	RefreshToken.associate = (models) => {
		RefreshToken.belongsTo(models.User, {
			foreignKey: 'user_id'
		});
	};

	return RefreshToken;
};
