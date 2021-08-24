import { Router } from "express";
import { categoryController } from "../../../controller";

const categoryRouter = Router();

categoryRouter.get("/category", categoryController.getAllCategory);
categoryRouter.get("/category/:slug", categoryController.getCategoryBySlug);
categoryRouter.post("/category", categoryController.addCategory);
categoryRouter.put("/category/:id", categoryController.updateCategory);
categoryRouter.delete("/category/:id", categoryController.deleteCategory);

export { categoryRouter };
