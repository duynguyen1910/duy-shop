import { Category, CategoryType } from "../model";

export function getAllCategory() {
  return Category.find();
}

export function getCategoryBySlug(slug: string) {
  return Category.findOne({
    slug: slug,
  });
}

export async function getCategoryByPaginate(page: number, perPage: number) {
  const total = await Category.count();
  const categories = await Category.find()
    .limit(perPage)
    .skip(perPage * page);
  return {
    data: categories,
    total: total,
  };
}

export function addCategory(categoryInfo: CategoryType) {
  const category = new Category({
    name: categoryInfo.name,
    description: categoryInfo.description,
  });
  return category.save();
}

export async function updateCategory(
  categoryId: string,
  categoryInfo: CategoryType
) {
  const category = await Category.findByIdAndUpdate(categoryId, categoryInfo);
  if (category) return Category.findOne({ _id: categoryId });
  return undefined;
}

export function deleteCategory(CategoryId: string) {
  return Category.findByIdAndDelete(CategoryId);
}
