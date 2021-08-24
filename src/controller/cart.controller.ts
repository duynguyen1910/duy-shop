import { cartService } from "../service";
import { Request, Response } from "express";

class CartController {
  async getCart(req: Request, res: Response) {
    try {
      const cart = await cartService.getCart(req.headers.userId as string);
      if (cart) {
        return res.status(200).json(cart);
      }
      return res.status(501).json({ message: "Error when get cart" });
    } catch (error) {
      return res.status(501).json({ message: "Error when get cart" });
    }
  }
  async addToCart(req: Request, res: Response) {
    try {
      const cart = await cartService.addToCart({
        ...req.body,
        creator: req.headers.userId,
      });

      if (cart) {
        return res.status(200).json(cart);
      }
      return res.status(501).json({ message: "Error when add to cart" });
    } catch (error) {
      return res.status(501).json({ message: "Error when add to cart" });
    }
  }
  async deleteCart(req: Request, res: Response) {
    try {
      const cart = await cartService.removeCard(req.params.id);
      if (cart) {
        return res.status(200).json({ message: "deleted" });
      }
      return res.status(501).json({ message: "Error when delete cart" });
    } catch (error) {
      return res.status(501).json({ message: "Error when delete cart" });
    }
  }
}

export const cartController = new CartController(); 
