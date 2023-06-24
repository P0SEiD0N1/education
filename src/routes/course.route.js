const { Router } = require("express");
const { addCourse, courseGet } = require("../controllers/courses/courses.controller");

const route = Router();

route.post("/post/course", addCourse).get("/get/courses", courseGet);

module.exports = route;
