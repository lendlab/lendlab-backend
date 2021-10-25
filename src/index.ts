import "reflect-metadata";
import "dotenv-safe";
import express from "express";
import redis from "redis";
import {ApolloServer} from "apollo-server-express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";

import {schemaIndex} from "./resolvers";
import {createConnection} from "typeorm";
//import {cloudConnection} from "./cloudConncection";
//import {connection} from "./slqconnection";

const main = async () => {
  //cloud connection
  //await cloudConnection();
  //
  //connection.connect((err) => {
  //  if (err) {
  //    throw err;
  //  }
  //  console.log("connected to scalegrid established");
  //});

  //localhost databse
  await createConnection();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient({
    host: "SG-lendlab-47395.servers.mongodirector.com",
    port: 6379,
    auth_pass: "O6uYtPhc3Uy5lJ2dJxAnLxKgJFID01JZ",
  });

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
        host: "SG-lendlab-47395.servers.mongodirector.com:6379",
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
