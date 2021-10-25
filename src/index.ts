import "reflect-metadata";
import "dotenv-safe";
import Express from "express";
import {createConnection} from "typeorm";
import redis from "redis";
import {ApolloServer} from "apollo-server-express";

import {schemaIndex} from "./resolvers";
import {session_config} from "./session";

const main = async () => {
  await createConnection();

  const app = Express();

  app.use(session_config);

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
