import { BaseRepository } from "./base.repository";
import { Token } from "../model";

class TokenRepository extends BaseRepository {}

export const tokenRepository = new TokenRepository(Token);
