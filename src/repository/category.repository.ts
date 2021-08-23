import { BaseRepository } from "./base.repository";
import { Category } from "../model";

class CategoryRepository extends BaseRepository {}

export const categoryRepository = new CategoryRepository(Category);
