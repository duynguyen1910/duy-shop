import dotenv from 'dotenv';
dotenv.config();
import path from "path";

export const config = {
    port: process.env.PORT,
    mongoDbHost: process.env.MONGODB_HOST,
    mongoDbCollection: process.env.MONGODB_COLLECTION,
    jwtSecrettKey: process.env.JWT_SECRET_KEY,
    filePath: path.resolve(`./${process.env.FILE_PATH}`),
}