import { ProductType } from "../model";
import { productRepository } from "../repository";

export function getAllProduct() {
  return productRepository.find();
}

export function getProductBySlug(slug: string) {
  return productRepository.findOne({
    slug: slug,
  });
}

export function getProductByPaginate(page: number, perPage: number) {
  return productRepository.findByPaginate(page, perPage);
}

export function getProductByCategory(categoryId: string) {
  return productRepository.find({
    category: categoryId,
  });
}

export function getProductByCategoryPaginate(
  categoryId: string,
  page: number,
  perPage: number
) {
  return productRepository.findByPaginate(page, perPage, {
    category: categoryId,
  });
}

export async function addProduct(productInfo: ProductType) {
  return productRepository.saveWithSlug(productInfo);
}

export async function updateProduct(
  productId: string,
  productInfo: ProductType
) {
  return productRepository.update(productId, productInfo);
}

export function deleteProduct(productId: string) {
  return productRepository.delete(productId);
}
