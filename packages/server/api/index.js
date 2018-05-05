const { Router } = require("express");
const authRoutesV1 = require("./v1/routes/auth.routes");

const V1 = "v1";

module.exports = (ctrs) => {
	const api = Router();

	api.use(`/${V1}/`, authRoutesV1(ctrs));

	return api;
};
