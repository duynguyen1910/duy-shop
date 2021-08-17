import { Router } from "express";
import * as ProductController from "../../../controller/product.controller";

const productRouter = Router();

productRouter.get("/product", ProductController.getAllProduct);
productRouter.get("/product/:slug", ProductController.getProductBySlug);
productRouter.post("/product", ProductController.addProduct);
productRouter.put("/product/:id", ProductController.updateProduct);
productRouter.delete("/product/:id", ProductController.deleteProduct);
productRouter.get(
  "/product-by-category/:categoryId",
  ProductController.getProductByCategory
);

export { productRouter };
