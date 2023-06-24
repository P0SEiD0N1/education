const jwt = require("jsonwebtoken");
const config = require("../config");

const sign = (payload) =>
  jwt.sign(payload, config.SECRET_KEY, { expiresIn: "21h" });

const verify = (payload) => jwt.verify(payload, config.SECRET_KEY);

module.exports = {
  sign,
  verify,
};
