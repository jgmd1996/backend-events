const express = require('express');
const router = express.Router();

const genreController = require('../controllers/GenreController');


 // .get("/genre", GenreController.genreList)
  router.get("/genre/:id", genreController.findById)
  router.post("/genre", genreController.create)// registrar novo genero
  router.put("/genre/:id", genreController.update)
  //.delete("/genre/:id", GenreController.deleteGender)

  module.exports = router; 