import { Category, CategoryType } from "../model";
import { CategoryRepository } from "../repository";

const categoryRepository = new CategoryRepository(Category);

export function getAllCategory() {
  return categoryRepository.find();
}

export function getCategoryBySlug(slug: string) {
  return categoryRepository.findOne({
    slug: slug,
  });
}

export function getCategoryByPaginate(page: number, perPage: number) {
  return categoryRepository.findByPaginate(page, perPage);
}

export function addCategory(categoryInfo: CategoryType) {
  return categoryRepository.saveWithSlug(categoryInfo);
}

export function updateCategory(categoryId: string, categoryInfo: CategoryType) {
  return categoryRepository.update(categoryId, categoryInfo);
}

export function deleteCategory(categoryId: string) {
  return categoryRepository.delete(categoryId);
}
