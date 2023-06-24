const { fetchOne, fetch } = require("../../utils/pg");

const postBlogs = `INSERT INTO blogs( price, job, description, image ) VALUES ($1, $2, $3, $4) returning *`;

const getBlogs = `select * from blogs`;

const blopPost = (...values) => fetchOne(postBlogs, ...values);

const blogGet = () => fetch(getBlogs);

module.exports = {
  blogGet,
  blopPost,
};
