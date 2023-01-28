const express = require('express');
const router = express.Router();

const eventController = require ("../controllers/EventController.js");

  router.get("/event", eventController.findByAll)
  router.get("/event/:eventId", eventController.findById)
  router.post("/event", eventController.create)
  router.put("/event/", eventController.update)
  router.delete("/event/:eventId", eventController.deleteEvent)

  module.exports = router; 