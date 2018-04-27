const jwt = require("jsonwebtoken");

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

module.exports = (db) => ({
	async refresh(refreshToken) {
		jwt.verify(refreshToken, AUTH_SECRET, (err, decoded) => {
			if (decoded.type !== "refresh") {
				// invalid token, not a refresh token
			}
			// create new tokens and save to the database
		});
	}
});
