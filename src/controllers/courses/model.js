const { fetchOne, fetch } = require("../../utils/pg");

const postCourses = `INSERT INTO courses( price, job, description, image,trainer_id ) VALUES ($1, $2, $3, $4,$5) returning *`;
const getCourses = `select * from courses`;

const cPost = (...values) => fetchOne(postCourses, ...values);
const cGet = () => fetch(getCourses);

module.exports = {
  cGet,
  cPost,
};
