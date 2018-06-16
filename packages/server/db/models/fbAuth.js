module.exports = (sequelize, DataTypes) => {
	const FBAuth = sequelize.define("FbAuth", {
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
				allowNull: false,
				notEmpty: true
			}
		},
		fbId: {
			type: DataTypes.STRING,
			validate: {
				allowNull: false,
				notEmpty: true
			}
		}
	});

	FBAuth.associate = (models) => {
		FBAuth.belongsTo(models.User, {
			foreignKey: 'userId'
		});
	};

	return FBAuth;
};
