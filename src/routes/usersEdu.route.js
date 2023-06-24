const { Router } = require("express");
const {
  addUserEdu,
} = require("../controllers/usersEdu/usersEdu.controller");

const route = Router();

route.post("/post/free-course", addUserEdu);

module.exports = route;
