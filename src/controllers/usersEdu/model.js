const { fetchOne, fetch } = require("../../utils/pg");

const pUsers = `INSERT INTO users_edu(name,phone,email,image) VALUES ($1, $2, $3, $4) returning *`;

const gUsers = `select * from users_edu`;

const pUserEdu = (...values) => fetchOne(pUsers, ...values);

const gUserEdu = () => fetch(gUsers);

module.exports = {
  pUserEdu,
  gUserEdu,
};
