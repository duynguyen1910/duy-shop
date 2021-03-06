import { cartRepository } from "../repository";
import { CartType } from "../model";

class CartService {
  getCart(userId: string) {
    return cartRepository.find({ creator: userId, status: "draft" });
  }

  getCartById(cartId: string) {
    return cartRepository.findOne({ _id: cartId, status: "draft" });
  }

  addToCart(data: CartType) {
    return cartRepository.save({
      ...data,
      status: "draft",
    });
  }

  updateCart(cartId: string, data: Partial<CartType>) {
    return cartRepository.update(cartId, data);
  }

  removeCard(cartId: string) {
    return cartRepository.delete(cartId);
  }
}

export const cartService = new CartService();
