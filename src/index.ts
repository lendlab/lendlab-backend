import "reflect-metadata";
import "dotenv";
import {ApolloServer} from "apollo-server-express";
import express from "express";
import session from "express-session";
import cors from "cors";
import connectRedis from "connect-redis";
import redis from "redis";
import {createConnection} from "typeorm";
//Subscriptions
import {createServer} from "http";
import {SubscriptionServer} from "subscriptions-transport-ws";
import {execute, subscribe} from "graphql";
import {PubSub} from "type-graphql";

import {schemaIndex} from "./resolvers/index";
//import {cloudConnection} from "./cloudConncection";

const main = async () => {
  //cloud connection
  await createConnection();

  //await cloudConnection();

  //if (!cloudConnection) {
  //  throw new Error();
  //} else {
  //  console.log("conectado a digitalocean");
  //}

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient({
    host: process.env.REDIS_URL,
    auth_pass: process.env.REDIS_PASS,
    tls: 25061,
    port: 25061,
  });

  redisClient.on("error", function (error) {
    console.error(error);
  });

  const app = express();

  const httpServer = createServer(app);

  app.set("trust proxy", true);

  app.use(
    cors({
      credentials: true,
      origin: [
        "https://studio.apollographql.com",
        "http://localhost:4000/graphql",
        "http://localhost:3000",
        "https://lend-lab.com",
      ],
    })
  );

  app.use(
    session({
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
    })
  );

  const pubSub = PubSub();

  const schema = await schemaIndex;

  const apolloServer = new ApolloServer({
    schema,
    context: ({req, res}) => ({
      req,
      res,
      redis,
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

  SubscriptionServer.create(
    {schema, subscribe, execute},
    {server: httpServer, path: apolloServer.graphqlPath}
  );

  httpServer.listen({port: process.env.PORT || 4000}, () => {
    console.log(
      `Server listening on localhost:4000${apolloServer.graphqlPath}`
    );
  });
};

main();
