import "dotenv/config";
import mysql from "mysql";
import fs from "fs";

export const connection = mysql.createConnection({
  host: process.env.MYSQL_URI,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 25060,
  ssl: {ca: fs.readFileSync("./ca-certificate.crt")},
});
