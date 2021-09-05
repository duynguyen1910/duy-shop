import { Request, Response } from "express";
import { orderService } from "../service";

class OrderController {
  async getAllOrder(req: Request, res: Response) {
    try {
      const page = +req.query.page;
      const perpage = +req.query.perpage;
      if (page && perpage) {
        const orders = await orderService.getOrderByPaginate(page, perpage);
        return res.status(200).json(orders);
      }
      const allOrder = await orderService.getAllOrder();
      return res.status(200).json(allOrder);
    } catch (error) {
      return res.status(500).json({ message: "Error when get orders" });
    }
  }

  async getOrderById(req: Request, res: Response) {
    try {
      const order = await orderService.getOrderById(req.params.id);
      if (order) {
        res.status(200).json(order);
      }
      return res.status(500).json({ message: "Error when get order" });
    } catch (error) {
      return res.status(500).json({ message: "Error when get order" });
    }
  }

  async addOrder(req: Request, res: Response) {
    try {
      const order = await orderService.addOrder(
        req.headers.userId as string,
        req.body
      );
      if (order) {
        return res.status(200).json(order);
      }
      return res.status(501).json({ message: "Error when add to order" });
    } catch (error) {
      return res.status(501).json({ message: "Error when add to order" });
    }
  }

  async updateOrder(req: Request, res: Response) {
    try {
      const order = await orderService.updateOrder(req.params.id, req.body);
      if (order) {
        return res.status(200).json(order);
      }
      return res.status(500).json({ message: "Error when update order" });
    } catch (error) {
      return res.status(500).json({ message: "Error when update order" });
    }
  }

  async deleteOrder(req: Request, res: Response) {
    try {
      const order = await orderService.deleteOrder(req.params.id);
      if (order) {
        return res.status(200).json({ message: "deleted" });
      }
      return res.status(500).json({ message: "Error when delete order" });
    } catch (error) {
      return res.status(500).json({ message: "Error when delete order" });
    }
  }
}

export const orderController = new OrderController();
