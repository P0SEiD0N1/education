const auth = require("./auth.route");
const blog = require("./blog.route");
const client = require("./client.route");
const course = require("./course.route");
const trainers = require("./trainer.route");
const events = require("./event.route");
const usersEdu = require("./usersEdu.route");

module.exports = [auth, blog, client, trainers, course, events, usersEdu];
