import { Product, ProductType } from "../model";

export function getAllProduct() {
    return Product.find();
}

export function getProductBySlug(slug: string) {
    return Product.findOne({
        slug: slug,
    });
}

export async function getProductByPaginate(page: number, perPage: number) {
    const total = await Product.count();
    const products = await Product.find()
        .limit(perPage)
        .skip(perPage * (page - 1));
    return {
        data: products,
        total: total,
    };
}

export function getProductByCategory(categoryId: string) {
    return Product.find({
        category: categoryId,
    });
}

export async function getProductByCategoryPaginate(categoryId: string, page: number, perPage: number) {
    const total = await Product.count({
        category: categoryId,
    });
    const products = await Product.find()
        .limit(perPage)
        .skip(perPage * (page - 1));
    return {
        data: products,
        total: total,
    };
}

export function addProduct(productInfo: ProductType) {
    const product = new Product({
        name: productInfo.name,
        description: productInfo.description,
        category: productInfo.category,
        price: productInfo.price,
        promotionPrice: productInfo?.promotionPrice,
    });
    return product.save();
}

export async function updateProduct(
    productId: string,
    productInfo: ProductType
) {
    const category = await Product.findByIdAndUpdate(productId, productInfo);
    if (category) return Product.findOne({ _id: productId });
    return undefined;
}

export function deleteProduct(productId: string) {
    return Product.findByIdAndDelete(productId);
}
