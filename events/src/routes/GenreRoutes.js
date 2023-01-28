const express = require('express');
const router = express.Router();

const genreController = require('../controllers/GenreController');

  router.get("/genre", genreController.findByAll)//lista todos
  router.get("/genre/:genreId", genreController.findById)//buscR POR ID
  router.post("/genre", genreController.create)// registrar novo genero
  router.put("/genre", genreController.update)// atalizar
  router.delete("/genre/:genreId", genreController.deleteGenre)//deletar

  module.exports = router; 