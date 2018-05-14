module.exports = (sequelize, DataTypes) => {
	const RefreshToken = sequelize.define('refreshToken', {
		token: {
			primaryKey: true,
			type: DataTypes.STRING
		}
	});

	RefreshToken.associate = (models) => {
		RefreshToken.belongsTo(models.User, {
			foreignKey: 'id'
		});
	};

	return RefreshToken;
};
