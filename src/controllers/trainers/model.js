const { fetchOne, fetch } = require("../../utils/pg");

const pTrainers = `INSERT INTO trainers( name, position, description, image ) VALUES ($1, $2, $3, $4) returning *`;

const gTrainers = `select * from trainers`;

const pUsers = (...values) => fetchOne(pTrainers, ...values);

const gUsers = () => fetch(gTrainers);

module.exports = {
  pUsers,
  gUsers,
};
