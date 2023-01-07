import express from "express";
import CategoryController from "../controllers/categoriesController.js";

const router = express.Router();

router
  .get("/categories", CategoryController.listarCategories)
  .get("/categories/:id", CategoryController.listarCategoryPorId)
  .post("/categories", CategoryController.cadastrarCategory)
  .put("/categories/:id", CategoryController.atualizarCategory)
  .delete("/categories/:id", CategoryController.excluirCategory)

export default router;   