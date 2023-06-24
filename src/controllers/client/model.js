const { fetchOne, fetch } = require("../../utils/pg");

const postClients = `INSERT INTO clients( username, email,phone,image ) VALUES ($1, $2, $3,$4) returning *`;
const getClients = `select * from users_edu`;

const clientPost = (...values) => fetchOne(postClients, ...values);
const clientGet = () => fetch(getClients);

module.exports = {
  clientPost,
  clientGet,
};
