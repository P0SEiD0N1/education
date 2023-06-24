const { Router } = require("express");
const {  pEvent,  gEvent,} = require("../controllers/events/event.controller");

const route = Router();

route.post("/event", pEvent)
route.get("/events", gEvent);

module.exports = route;
