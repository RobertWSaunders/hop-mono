module.exports = (sequelize, DataTypes) => {
	const RefreshToken = sequelize.define('refreshToken', {
		refreshToken: {
			primaryKey: true,
			type: DataTypes.STRING,
			validate: {
				notNull: true,
				notEmpty: true
			}
		}
	});

	RefreshToken.associate = (models) => {
		RefreshToken.belongsTo(models.User, {
			foreignKey: 'userId'
		});
	};

	return RefreshToken;
};
