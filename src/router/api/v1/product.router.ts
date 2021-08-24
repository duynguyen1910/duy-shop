import { Router } from "express";
import { productController } from "../../../controller";

const productRouter = Router();

productRouter.get("/product", productController.getAllProduct);
productRouter.get("/product/:slug", productController.getProductBySlug);
productRouter.post("/product", productController.addProduct);
productRouter.put("/product/:id", productController.updateProduct);
productRouter.delete("/product/:id", productController.deleteProduct);
productRouter.get(
  "/product-by-category/:categoryId",
  productController.getProductByCategory
);

export { productRouter };
