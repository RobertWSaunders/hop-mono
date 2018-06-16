const jwt = require("jsonwebtoken");

const { AUTH_SECRET } = process.env;

function getBearer(req) {
	if (!req.headers || !req.headers.authorization) return false;
	const split = req.headers.authorization.split(" ");
	if (split.length !== 2 || split[0] !== "Bearer") return false;
	return split[1];
}

module.exports = () => (req, res, next) => {

	const token = getBearer(req);

	// NOTE: GQL will take care of auth if no token.
	// This won't work if we add authenticated REST endpoints.
	// Currently no plan for that so this is a suitable solution.
	if (!token) {
		return next();
	}

	jwt.verify(token, AUTH_SECRET, (err, decoded) => {
		if (err) {
			return res
				.status(401)
				.json({
					code: 401,
					type: "AUTHORIZATION",
					message: "Invalid access token!"
				});
		}

		req.userId = decoded;
		next();
	});
};
