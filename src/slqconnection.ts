import "dotenv-safe";
import mysql from "mysql";
import fs from "fs";

export const connection = mysql.createConnection({
  host: "SG-testcluster-5163-mysql-master.servers.mongodirector.com",
  user: "admin2",
  password: "Mizapatofavorito1!",
  database: "testdb",
  port: 3306,
  ssl: {ca: fs.readFileSync("./ca.cert.txt")},
});
