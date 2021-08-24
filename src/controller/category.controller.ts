import { categoryService } from "../service";
import { Request, Response } from "express";

class CategoryController {
  async getAllCategory(req: Request, res: Response) {
    try {
      const page = +req.query.page;
      const perpage = +req.query.perpage;
      if (page && perpage) {
        const categories = await categoryService.getCategoryByPaginate(
          page,
          perpage
        );
        return res.status(200).json(categories);
      }
      const allCategory = await categoryService.getAllCategory();
      return res.status(200).json(allCategory);
    } catch (error) {
      return res.status(500).json({ message: "Error when get categories" });
    }
  }

  async getCategoryBySlug(req: Request, res: Response) {
    try {
      const category = await categoryService.getCategoryBySlug(req.params.slug);
      if (category) return res.status(200).json(category);
      return res.status(500).json({ message: "Error when get category" });
    } catch (error) {
      return res.status(500).json({ message: "Error when get category" });
    }
  }

  async addCategory(req: Request, res: Response) {
    try {
      const category = await categoryService.addCategory(req.body);
      if (category) {
        return res.status(200).json(category);
      }
      return res.status(500).json({ message: "Error when add category" });
    } catch (error) {
      return res.status(500).json({ message: "Error when add category" });
    }
  }

  async updateCategory(req: Request, res: Response) {
    const categoryId = req.params.id;
    try {
      const category = await categoryService.updateCategory(
        categoryId,
        req.body
      );
      if (category) {
        return res.status(200).json(category);
      }
      return res.status(500).json({ message: "Error when update category" });
    } catch (error) {
      return res.status(500).json({ message: "Error when update category" });
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      const category = await categoryService.deleteCategory(req.params.id);
      if (category) {
        return res.status(200).json({ message: "deleted" });
      }
      return res.status(500).json({ message: "Error when delete category" });
    } catch (error) {
      return res.status(500).json({ message: "Error when delete category" });
    }
  }
}

export const categoryController = new CategoryController();
