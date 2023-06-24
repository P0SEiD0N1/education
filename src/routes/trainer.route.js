const { Router } = require("express");
const { pTrainer, gTrainer,} = require("../controllers/trainers/trainers.controller");

const route = Router();

route.post("/post/trainer", pTrainer).get("/get/trainers", gTrainer);

module.exports = route;
