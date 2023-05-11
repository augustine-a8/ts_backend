import dotenv from "dotenv";
dotenv.config();

export default {
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    server: {
        port: process.env.SERVER_PORT
            ? parseInt(process.env.SERVER_PORT, 10)
            : 4040,
    },
    jwt: {
        secretKey: process.env.JWT_SECRET_KEY,
    },
};
