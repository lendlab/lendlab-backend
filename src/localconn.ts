import {createConnection} from "typeorm";
import {User} from "./entity/user";

export const localcon = async () => {
  await createConnection({
    name: "default",
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "lendlab2",
    port: 3306,
    synchronize: true,
    logging: true,
    entities: [User],
  });
};
