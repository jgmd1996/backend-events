import express from "express";
import BandController from "../controllers/BandController.js";

const router = express.Router();

router
  .get("/band", BandController.bandList)
  //.get("/produtos/busca", ProdutoController.listarProdutoPorEditora)
  .get("/band/:id", BandController.listBandById)
  .post("/band", BandController.registerband)
  .put("/band/:id", BandController.updateBand)
  .delete("/band/:id", BandController.deleteband)

export default router;   