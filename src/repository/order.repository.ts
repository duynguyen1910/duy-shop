import { BaseRepository } from "./base.repository";
import { Order } from "../model";

class OrderRepository extends BaseRepository {
  async save(data: any) {
    const model = new Order(data);
    const rs = await model.save();
    return this.findOne(rs._id);
  }

  find(query = {}) {
    return Order.find(query).populate({
      path: "product",
      populate: { path: "product" },
    });
  }

  async findByPaginate(page: number = 1, perPage: number = 10, query = {}) {
    const total = await this.collection.count();
    const result = await this.collection
      .find(query)
      .limit(perPage)
      .skip(perPage * (page - 1))
      .populate({
        path: "product",
        populate: { path: "product" },
      });
    return {
      data: result,
      total,
    };
  }

  findOne(query = {}) {
    return Order.findOne(query).populate({
      path: "product",
      populate: { path: "product" },
    });
  }

  async update(_id: string, data: any) {
    const result = Order.findByIdAndUpdate(_id, data);
    if (result) {
      const rs = this.findOne({ _id });
      return rs;
    }
    return undefined;
  }
}

export const orderRepository = new OrderRepository(Order);
