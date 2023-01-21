const express = require('express');
const router = express.Router();

const genreController = require('../controllers/GenreController');


  //router.get("/genre", genreController.genreList)
  router.get("/genre/:genreId", genreController.findById)//buscR POR ID
  router.post("/genre", genreController.create)// registrar novo genero
  router.put("/genre", genreController.update)// atalizar
  //.delete("/genre/:id", GenreController.deleteGender)

  module.exports = router; 