import fs from "fs";

import {createConnection} from "typeorm";
import {Belongs} from "./entity/belongs";
import {Course} from "./entity/course";
import {Incident} from "./entity/incident";
import {Institution} from "./entity/institution";
import {Laboratorist} from "./entity/laboratorist";
import {Lend} from "./entity/lend";
import {Material} from "./entity/material";
import {Occupies} from "./entity/occupies";
import {Reservation} from "./entity/reservation";
import {Room} from "./entity/room";
import {User} from "./entity/user";

export const cloudConnection = async () => {
  await createConnection({
    name: "default",
    type: "mysql",
    username: "admin2",
    password: "Mizapatofavorito1!",
    database: "testdb",
    host: "SG-testcluster-5163-mysql-master.servers.mongodirector.com",
    synchronize: true,
    logging: false,
    port: 3306,
    ssl: {ca: fs.readFileSync("./ca.cert.txt")},
    entities: [
      User,
      Reservation,
      Lend,
      Material,
      Laboratorist,
      Belongs,
      Course,
      Room,
      Institution,
      Incident,
      Occupies,
    ],
  });
};
