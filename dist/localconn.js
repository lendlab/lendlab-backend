"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localcon = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const localcon = async () => {
    await (0, typeorm_1.createConnection)({
        name: "default",
        type: "mysql",
        host: "localhost",
        username: "root",
        password: "",
        database: "lendlab2",
        port: 3306,
        synchronize: true,
        logging: true,
        entities: [user_1.User],
    });
};
exports.localcon = localcon;
//# sourceMappingURL=localconn.js.map