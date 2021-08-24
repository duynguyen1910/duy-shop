import { cartRepository } from "../repository";
import { CartType } from "../model";

class CartService {
  getCart(userId: string) {
    return cartRepository.find({ creator: userId });
  }

  addToCart(data: CartType) {
    return cartRepository.save({
      ...data,
      status: "draft",
    });
  }

  removeCard(cartId: string) {
    return cartRepository.delete(cartId);
  }
}

export const cartService = new CartService();
