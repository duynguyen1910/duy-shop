import { BaseRepository } from "./base.repository";
import { User } from "../model";

class UserRepository extends BaseRepository {}

export const userRepository = new UserRepository(User);
