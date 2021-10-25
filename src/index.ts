import "reflect-metadata";
import "dotenv-safe";
import express from "express";
import redis from "redis";
import {ApolloServer} from "apollo-server-express";
import {createConnection} from "typeorm";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";

import {schemaIndex} from "./resolvers";
//import {connection} from "./slqconnection";
//import {cloudConnection} from "./cloudConncection";

const main = async () => {
  //cloud connection
  //await cloudConnection();

  //connection.connect((err) => {
  //  if (err) {
  //    throw err;
  //  }
  //  console.log("connected");
  //});

  //local databse

  await createConnection();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  const app = express();

  app.set("trust proxy", true);

  app.use(
    cors({
      credentials: true,
      origin: [
        "https://studio.apollographql.com",
        "http://localhost:4000/graphql",
        "http://localhost:3000",
      ],
    })
  );

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
        host: process.env.REDIS_URL,
      }),
      cookie: {
        maxAge: 10000000000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      },
      saveUninitialized: false,
      secret: "qiwroasdjlasddde",
      resave: false,
    })
  );

  const schema = await schemaIndex;

  const apolloServer = new ApolloServer({
    schema,
    context: ({req, res}) => ({
      req,
      res,
      redis,
    }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  const port = process.env.PORT || 4000;
  app.listen({port}, () => {
    console.log(`server running on http://localhost:${port}/graphql :)`);
  });
};

main();
