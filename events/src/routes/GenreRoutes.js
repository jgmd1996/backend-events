const express = require('express');
const router = express.Router();

const genreController = require('../controllers/GenreController');

  router.get("/genre", genreController.findByAll)
  router.get("/genre/:genreId", genreController.findById)
  router.post("/genre", genreController.create)
  router.put("/genre", genreController.update)
  router.delete("/genre/:genreId", genreController.deleteGenre)

  module.exports = router; 