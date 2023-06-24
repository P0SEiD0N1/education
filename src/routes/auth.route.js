const { Router } = require("express");
const { login } = require("../controllers/auth/auth.controller");

const route = Router();

route.post("/login", login);

module.exports = route;
