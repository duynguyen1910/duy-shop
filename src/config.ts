import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT,
    mongoDbHost: process.env.MONGODB_HOST,
    mongoDbCollection: process.env.MONGODB_COLLECTION,
    jwtSecrettKey: process.env.JWT_SECRET_KEY,
}