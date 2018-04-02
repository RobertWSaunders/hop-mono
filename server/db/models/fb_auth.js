module.exports = (sequelize, DataTypes) => {
	const FBAuth = sequelize.define('fb_auth', {
		fb_email: {
			primaryKey: true,
			type: DataTypes.STRING
		},
		fb_token: {
			type: DataTypes.STRING
		},
		fb_id: {
			type: DataTypes.STRING
		}
	});

	FBAuth.associate = (models) => {
		FBAuth.belongsTo(models.User, {
			foreignKey: 'user_id'
		});
	};

	return FBAuth;
};
