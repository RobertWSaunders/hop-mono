const { Router } = require('express');

const AUTH = 'auth';

module.exports = (ctr) => {
	const authAPI = Router();

	const { auth } = ctr;

	authAPI.use(`/${AUTH}/refresh`, async (req, res) => {
		try {
			const tokens = await auth.refresh(req.body.refreshToken);
			return res.send(200).json({ tokens });
		} catch (err) {
			return res.send(401).json({ err });
		}
	});

	return authAPI;
};
