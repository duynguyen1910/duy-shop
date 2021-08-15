import { Router } from "express";
import * as CategoryController from "../../../controller/category.controller";

const categoryRouter = Router();

categoryRouter.get("/category", CategoryController.getAllCategory);
categoryRouter.get("/category/:slug", CategoryController.getCategoryBySlug);
categoryRouter.post("/category", CategoryController.addCategory);
categoryRouter.put("/category/:id", CategoryController.updateCategory);
categoryRouter.delete("/category/:id", CategoryController.deleteCategory);

export { categoryRouter };
