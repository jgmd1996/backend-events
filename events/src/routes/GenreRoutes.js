import express from "express";
import GenreController from "../controllers/GenreController.js";


const router = express.Router();

router
  .get("/genre", GenreController.genreList)
  .get("/genre/:id", GenreController.listGenreById)
  .post("/genre", GenreController.registerGender)
  .put("/genre/:id", GenreController.updateGender)
  .delete("/genre/:id", GenreController.deleteGender)

export default router;   