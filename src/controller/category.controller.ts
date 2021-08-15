import * as CategoryService from "../service/category.service";
import { Request, Response } from "express";
import { AsyncLocalStorage } from "node:async_hooks";
import { rmdirSync } from "fs";

export async function getAllCategory(req: Request, res: Response) {
  try {
    const page = +req.query.page;
    const perpage = +req.query.perpage;
    if (page && perpage) {
      const categories = await CategoryService.getCategoryByPaginate(
        page,
        perpage
      );
      return res.status(200).json(categories);
    }
    const allCategory = await CategoryService.getAllCategory();
    return res.status(200).json(allCategory);
  } catch (error) {
    return res.status(500).json({ message: "Error when get categories" });
  }
}

export async function getCategoryBySlug(req: Request, res: Response) {
  try {
    const category = await CategoryService.getCategoryBySlug(req.params.slug);
    if (category) return res.status(200).json(category);
    return res.status(500).json({ message: "Error when get category" });
  } catch (error) {
    return res.status(500).json({ message: "Error when get category" });
  }
}

export async function addCategory(req: Request, res: Response) {
  try {
    const category = await CategoryService.addCategory(req.body);
    if (category) {
      return res.status(200).json(category);
    }
    return res.status(500).json({ message: "Error when add category" });
  } catch (error) {
    return res.status(500).json({ message: "Error when add category" });
  }
}

export async function updateCategory(req: Request, res: Response) {
  const categoryId = req.params.id;
  try {
    const category = await CategoryService.updateCategory(categoryId, req.body);
    if (category) {
      return res.status(200).json(category);
    }
    return res.status(500).json({ message: "Error when update category" });
  } catch (error) {
    return res.status(500).json({ message: "Error when update category" });
  }
}

export async function deleteCategory(req: Request, res: Response) {
  try {
    const category = await CategoryService.deleteCategory(req.params.id);
    if (category) {
      return res.status(200).json({ message: "deleted" });
    }
    return res.status(500).json({ message: "Error when delete category" });
  } catch (error) {
    return res.status(500).json({ message: "Error when delete category" });
  }
}
