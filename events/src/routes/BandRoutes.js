const express = require('express');
const router = express.Router();

const bandController = require ("../controllers/BandController.js");

  router.get("/band", bandController.findByAll)
  router.get("/band/:bandId", bandController.findById)
  router.post("/band", bandController.create)
  router.put("/band/", bandController.update)
  router.delete("/band/:bandId", bandController.deleteBand)

  module.exports = router; 