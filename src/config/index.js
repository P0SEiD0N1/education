require("dotenv/config");

const { env } = process;

const config = {
  PORT: env.PORT || 9090,
  SECRET_KEY: env.SECRET_KEY,
};

module.exports = config;
