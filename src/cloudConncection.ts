import "dotenv/config";
import fs from "fs";
import {createConnection} from "typeorm";

export const cloudConnection = async () => {
  await createConnection({
    name: "prod",
    type: "mysql",
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_URI,
    database: process.env.MYSQL_DATABASE,
    port: 25060,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    synchronize: true,
    logging: true,
    ssl: {ca: fs.readFileSync("./ca-certificate.crt")},
    entities: [__dirname, "./dist/entity/*.*"],
  });
};
