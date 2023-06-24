const {  fetch } = require("../../utils/pg");

const getAuth = `select * from auth`;

const blogGet = () => fetch(getAuth);

module.exports = {
  blogGet,
};
