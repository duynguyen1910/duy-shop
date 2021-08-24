import { BaseRepository } from "./base.repository";
import { Cart } from "../model";

class CartRepository extends BaseRepository {
  save(data: any) {
    return super.save(data, ["product", "creator"]);
  }

  find(query = {}) {
    return super.find(query, ["product", "creator"]);
  }

  findOne(query = {}) {
    return super.findOne(query, ["product", "creator"]);
  }

  async update(_id: string, data: any) {
    return super.update(_id, data, ["product", "creator"]);
  }
}

export const cartRepository = new CartRepository(Cart);
