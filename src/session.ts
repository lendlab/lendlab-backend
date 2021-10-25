import "dotenv-safe";
import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import redis from "redis";
import cors from "cors";

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
    ],
  })
);

export const session_config = app.use(
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