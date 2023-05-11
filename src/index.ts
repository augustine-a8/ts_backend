import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import BodyParser from "body-parser";
import http from "http";

import { typeDefs, resolvers } from "./graphql";
import Config from "./config";
import schema from "./schema/dataSource";

const { json } = BodyParser;
const PORT = Config.server.port;
const { initializeDataSource } = schema;

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
    "/graphql",
    cors(),
    json(),
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    })
);

initializeDataSource().then(async (ds) => {
    await new Promise<void>((resolve) =>
        httpServer.listen({ port: PORT }, resolve)
    );
    console.log(`server ready at http://localhost:${PORT}/graphql`);
});
