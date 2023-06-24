const { Router } = require("express");
const { postClient, getClient } = require("../controllers/client/client.controller");

const route = Router();

route.post("/post/client", postClient)
.get("/get/clients", getClient);

module.exports = route;
