import slugify from "slugify";
import { addSubfixSlug } from "../utils";

export class BaseRepository {
  collection: any;
  constructor(Model: any) {
    this.collection = Model;
  }
  async save(data: any, populate: string[] = []) {
    const model = new this.collection(data);
    const rs = await model.save();
    return this.findOne(rs._id, populate);
  }

  async saveWithSlug(data: any, populate: string[] = []) {
    let slug = slugify(data.name);
    const checkExist = await this.collection.findOne({ slug });
    if (checkExist) {
      slug = addSubfixSlug(slug);
    }
    const rs = await this.save({ ...data, slug });
    return this.findOne(rs._id, populate);
  }

  find(query = {}, populate: string[] = []) {
    let result = this.collection.find(query);
    if (populate.length) {
      populate.forEach((expandField) => {
        result = result.populate(expandField);
      });
    }
    return result;
  }

  findOne(query = {}, populate: string[] = []) {
    let result = this.collection.findOne(query);
    if (populate.length) {
      populate.forEach((expandField) => {
        result = result.populate(expandField);
      });
    }
    return result;
  }

  async findByPaginate(
    page: number = 1,
    perPage: number = 10,
    query = {},
    populate: string[] = []
  ) {
    const total = await this.collection.count();
    if (!populate.length) {
      const result = await this.collection
        .find(query)
        .limit(perPage)
        .skip(perPage * (page - 1));
      return {
        data: result,
        total,
      };
    }

    let rs = this.collection.find(query);
    populate.forEach(async (expandField) => {
      rs = rs.populate(expandField);
    });
    rs = await rs.limit(perPage).skip(perPage * (page - 1));
    return {
      data: rs,
      total,
    };
  }

  async update(_id: string, data: any, populate: string[] = []) {
    const result = await this.collection.findByIdAndUpdate(_id, data);
    if (result) {
      const rs = this.findOne({ _id }, populate);
      console.log(rs);
      return rs;
    }
    return undefined;
  }

  delete(_id: string) {
    return this.collection.findByIdAndDelete(_id);
  }
}
