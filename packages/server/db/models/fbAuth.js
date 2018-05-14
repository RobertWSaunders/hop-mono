module.exports = (sequelize, DataTypes) => {
	const FBAuth = sequelize.define("fbAuth", {
		fbEmail: {
			primaryKey: true,
			type: DataTypes.STRING,
			validate: {
				isEmail: true,
				notNull: true,
				notEmpty: true
			}
		},
		fbToken: {
			type: DataTypes.STRING,
			validate: {
				notNull: true,
				notEmpty: true
			}
		},
		fbId: {
			type: DataTypes.STRING,
			validate: {
				notNull: true,
				notEmpty: true
			}
		}
	});

	FBAuth.associate = (models) => {
		FBAuth.belongsTo(models.User, {
			foreignKey: 'id'
		});
	};

	return FBAuth;
};
