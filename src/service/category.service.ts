import { Category, CategoryType } from "../model";
import { categoryRepository } from "../repository";

class CategoryService {
  getAllCategory() {
    return categoryRepository.find();
  }

  getCategoryBySlug(slug: string) {
    return categoryRepository.findOne({
      slug,
    });
  }

  getCategoryByPaginate(page: number, perPage: number) {
    return categoryRepository.findByPaginate(page, perPage);
  }

  addCategory(categoryInfo: CategoryType) {
    return categoryRepository.saveWithSlug(categoryInfo);
  }

  updateCategory(categoryId: string, categoryInfo: CategoryType) {
    return categoryRepository.update(categoryId, categoryInfo);
  }

  deleteCategory(categoryId: string) {
    return categoryRepository.delete(categoryId);
  }
}

export const categoryService = new CategoryService();