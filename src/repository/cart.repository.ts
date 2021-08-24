import { BaseRepository } from "./base.repository";
import { Cart } from "../model";

class CartRepository extends BaseRepository {
  save(data: any) {
    return super.save(data, ["product"]);
  }

  find(query = {}) {
    return super.find(query, ["product"]);
  }

  findOne(query = {}) {
    return super.findOne(query, ["product"]);
  }

  async update(_id: string, data: any) {
    return super.update(_id, data, ["product"]);
  }
}

export const cartRepository = new CartRepository(Cart);
