import "reflect-metadata";
import {ApolloServer} from "apollo-server-express";
import Express from "express";
import {buildSchema} from "type-graphql";
import {createConnection} from "typeorm";
import session from "express-session";
import connectRedis from "connect-redis";
import redis from "redis";
import cors from "cors";

import {LendResolver} from "./resolvers/lend/LendResolver";
import {MaterialResolver} from "./resolvers/material/MaterialResolver";
import {ReservationResolver} from "./resolvers/reservation/ReservationResolver";
import {RegisterResolver} from "./resolvers/users/RegisterResolver";
import {InstitutionResolver} from "./resolvers/institution/InstitutionResolver";

const main = async () => {
  await createConnection();

  const app = Express();

  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
        host: "127.0.0.1",
        port: 6379,
      }),
      cookie: {
        maxAge: 10000000000,
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      },
      saveUninitialized: false,
      secret: "qiwroasdjlasddde",
      resave: false,
    })
  );

  const schema = await buildSchema({
    resolvers: [
      MaterialResolver,
      RegisterResolver,
      ReservationResolver,
      LendResolver,
      InstitutionResolver,
    ],
    validate: false,
  });

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
    cors: true,
  });

  app.listen(4000, () => {
    console.log("server running on port 4000 :)");
  });
};

main();
