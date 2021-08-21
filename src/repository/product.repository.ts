import { BaseRepository } from "./base.repository";

export class ProductRepository extends BaseRepository {
  save(data: any) {
    return super.save(data, ["category"]);
  }

  async saveWithSlug(data: any) {
    return super.saveWithSlug(data, ["category"]);
  }

  find(query = {}) {
    return super.find(query, ["category"]);
  }

  findOne(query = {}) {
    return super.findOne(query, ["category"]);
  }

  async findByPaginate(page: number = 1, perPage: number = 10, query = {}) {
    return super.findByPaginate(page, perPage, query, ["category"]);
  }

  async update(_id: string, data: any) {
    return super.update(_id, data, ["category"]);
  }
}
