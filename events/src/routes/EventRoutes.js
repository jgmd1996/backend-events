import express from "express";
import EventController from "../controllers/EventController.js";

const router = express.Router();

router
  .get("/event", EventController.eventList)
  //.get("/produtos/busca", ProdutoController.listarProdutoPorEditora)
  .get("/event/:id", EventController.listEventById)
  .post("/event", EventController.registerEvent)
  .put("/event/:id", EventController.updateEvent)
  .delete("/event/:id", EventController.deleteEvent)

export default router;   