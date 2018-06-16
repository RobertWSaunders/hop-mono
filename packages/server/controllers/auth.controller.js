const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid");

const JWT_ISSUER = "Hop Authentication";
const ACCESS_TOKEN_EXPIRE_TIME = "5 minutes";
const REFRESH_TOKEN_EXPIRE_TIME = "60 minutes";

const { AUTH_SECRET } = process.env;

function createAccessToken(userId) {
	return jwt.sign(
		{
			userId
		},
		AUTH_SECRET,
		{
			expiresIn: ACCESS_TOKEN_EXPIRE_TIME,
			issuer: JWT_ISSUER
		}
	);
}

function createRefreshToken(userId) {
	return jwt.sign(
		{
			type: "refresh",
			userId
		},
		AUTH_SECRET,
		{
			expiresIn: REFRESH_TOKEN_EXPIRE_TIME,
			issuer: JWT_ISSUER
		}
	);
}

module.exports = (db, logger) => ({
	refresh: (refreshToken) => {
		const decoded = jwt.verify(refreshToken, AUTH_SECRET);
	},

	login: ({ email, password }) => {

	},

	signup: ({ firstName, lastName, email, password }) => {
		return new Promise((resolve, reject) => {
			return reject('test');
			// db.LocalAuth.create({
			// 	email,
			// 	password,
			// 	User: {
			// 		firstName,
			// 		lastName
			// 	}
			// }, { include: [db.User] }).then((localAuth) => {
			// 	return db.RefreshToken.create({
			// 		refreshToken: createRefreshToken(localAuth.userId)
			// 	}).then((refreshToken) => {
			// 		return resolve({
			// 			refreshToken: refreshToken.refreshToken,
			// 			accessToken: createAccessToken(localAuth.userId),
			// 			user: {
			// 				id: localAuth.User.userId,
			// 				firstName: localAuth.User.firstName,
			// 				lastName: localAuth.User.lastName,
			// 				dob: localAuth.User.dob
			// 			}
			// 		});
			// 	}).catch((err) => {
			// 		logger.error(err);
			// 		return reject();
			// 	});
			// }).catch((err) => {
			// 	logger.error(err);
			// 	return reject();
			// });
		});
	}
});
