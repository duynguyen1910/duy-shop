import { orderRepository } from "../repository";
import { OrderType, ProductType } from "../model";
import { cartService } from "./cart.service";

class OrderService {
  getAllOrder() {
    return orderRepository.find();
  }

  getOrderById(id: string) {
    return orderRepository.findOne({
      _id: id,
    });
  }

  getOrderByPaginate(page: number, perPage: number) {
    return orderRepository.findByPaginate(page, perPage);
  }

  async addOrder(userId: string, cartList: string[]) {
    const carts = await Promise.all(
      cartList.map(async (cartId) => {        
        const cart = await cartService.getCartById(cartId);
        cartService.updateCart(cartId, { status: "booked" });
        return {
          product: cart.product,
          amount: cart.amount,
        };
      })
    );
    const totalAmount = carts.reduce((total, item) => {
      return item.product.price * item.amount + total;
    }, 0);
    return orderRepository.save({
      product: carts.map((item) => ({
        product: item.product._id,
        amount: item.amount,
      })),
      status: "pending",
      totalAmount,
      creator: userId,
    });
  }

  updateOrder(orderId: string, orderInfo: OrderType) {
    return orderRepository.update(orderId, orderInfo);
  }

  deleteOrder(orderId: string) {
    return orderRepository.delete(orderId);
  }
}

export const orderService = new OrderService();
