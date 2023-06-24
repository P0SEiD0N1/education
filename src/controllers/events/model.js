const { fetchOne, fetch } = require("../../utils/pg");

const pEvent = `INSERT INTO events( description,  start_time, end_time,location, image) VALUES ($1, $2, $3, $4,$5) returning *`;
const gEvent = `select * from events`;

const postEvent = (...values) => fetchOne(pEvent, ...values);

const getEvent = () => fetch(gEvent);

module.exports = {
  postEvent,
  getEvent,
};
