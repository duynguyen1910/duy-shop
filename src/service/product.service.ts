import { ProductType } from "../model";
import { productRepository } from "../repository";

class ProductService {
  getAllProduct() {
    return productRepository.find();
  }

  getProductBySlug(slug: string) {
    return productRepository.findOne({
      slug,
    });
  }

  getProductByPaginate(page: number, perPage: number) {
    return productRepository.findByPaginate(page, perPage);
  }

  getProductByCategory(categoryId: string) {
    return productRepository.find({
      category: categoryId,
    });
  }

  getProductByCategoryPaginate(
    categoryId: string,
    page: number,
    perPage: number
  ) {
    return productRepository.findByPaginate(page, perPage, {
      category: categoryId,
    });
  }

  addProduct(productInfo: ProductType) {
    return productRepository.saveWithSlug(productInfo);
  }

  updateProduct(productId: string, productInfo: ProductType) {
    return productRepository.update(productId, productInfo);
  }

  deleteProduct(productId: string) {
    return productRepository.delete(productId);
  }
}

export const productService = new ProductService();
