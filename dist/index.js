"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const redis_1 = __importDefault(require("redis"));
const typeorm_1 = require("typeorm");
const http_1 = require("http");
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
const graphql_1 = require("graphql");
const type_graphql_1 = require("type-graphql");
const index_1 = require("./resolvers/index");
const main = async () => {
    await (0, typeorm_1.createConnection)();
    const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    const redisClient = redis_1.default.createClient({
        host: process.env.REDIS_URL,
        auth_pass: process.env.REDIS_PASS,
        tls: 25061,
        port: 25061,
    });
    redisClient.on("error", function (error) {
        console.error(error);
    });
    const app = (0, express_1.default)();
    const httpServer = (0, http_1.createServer)(app);
    app.set("trust proxy", true);
    app.use((0, cors_1.default)({
        credentials: true,
        origin: [
            "https://studio.apollographql.com",
            "http://localhost:4000/graphql",
            "http://localhost:3000",
            "https://lend-lab.com",
        ],
    }));
    app.use((0, express_session_1.default)({
        name: "qid",
        store: new RedisStore({
            client: redisClient,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 24 * 60 * 60 * 60,
            httpOnly: true,
            secure: true,
            sameSite: "none",
        },
        saveUninitialized: false,
        secret: "qiwroasdjlasddde",
        resave: false,
    }));
    const pubSub = (0, type_graphql_1.PubSub)();
    const schema = await index_1.schemaIndex;
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => ({
            req,
            res,
            redis: redis_1.default,
            pubSub,
        }),
        introspection: true,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        path: "/api",
        app,
        cors: false,
    });
    subscriptions_transport_ws_1.SubscriptionServer.create({ schema, subscribe: graphql_1.subscribe, execute: graphql_1.execute }, { server: httpServer, path: apolloServer.graphqlPath });
    httpServer.listen({ port: process.env.PORT || 4000 }, () => {
        console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`);
    });
};
main();
//# sourceMappingURL=index.js.map