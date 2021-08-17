import * as ProductService from "../service/product.service";
import { Request, Response } from "express";

export async function getAllProduct(req: Request, res: Response) {
  try {
    const page = +req.query.page;
    const perpage = +req.query.perpage;
    if (page && perpage) {
      const products = await ProductService.getProductByPaginate(page, perpage);
      return res.status(200).json(products);
    }
    const allProduct = await ProductService.getAllProduct();
    return res.status(200).json(allProduct);
  } catch (error) {
    return res.status(500).json({ message: "Error when get products" });
  }
}

export async function getProductBySlug(req: Request, res: Response) {
  try {
    const product = await ProductService.getProductBySlug(req.params.slug);
    if (product) return res.status(200).json(product);
    return res.status(500).json({ message: "Error when get product" });
  } catch (error) {
    return res.status(500).json({ message: "Error when get product" });
  }
}

export async function getProductByCategory(req: Request, res: Response) {
  try {
    const page = +req.query.page;
    const perpage = +req.query.perpage;
    const categoryId = req.params.categoryId;
    if (page && perpage) {
      const products = await ProductService.getProductByCategoryPaginate(
        categoryId,
        page,
        perpage
      );
      return res.status(200).json(products);
    }
    const allProduct = await ProductService.getProductByCategory(categoryId);
    return res.status(200).json(allProduct);
  } catch (error) {
    return res.status(500).json({ message: "Error when get products" });
  }
}

export async function addProduct(req: Request, res: Response) {
  try {
    const product = await ProductService.addProduct(req.body);
    if (product) {
      return res.status(200).json(product);
    }
    return res.status(500).json({ message: "Error when add product" });
  } catch (error) {
    return res.status(500).json({ message: "Error when add product" });
  }
}

export async function updateProduct(req: Request, res: Response) {
  const productId = req.params.id;
  try {
    const product = await ProductService.updateProduct(productId, req.body);
    if (product) {
      return res.status(200).json(product);
    }
    return res.status(500).json({ message: "Error when update product" });
  } catch (error) {
    return res.status(500).json({ message: "Error when update product" });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const product = await ProductService.deleteProduct(req.params.id);
    if (product) {
      return res.status(200).json({ message: "deleted" });
    }
    return res.status(500).json({ message: "Error when delete product" });
  } catch (error) {
    return res.status(500).json({ message: "Error when delete product" });
  }
}