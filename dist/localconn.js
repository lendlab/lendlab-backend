"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localcon = void 0;
const typeorm_1 = require("typeorm");
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
        entities: [__dirname, "./src/entity/*.*"],
    });
};
exports.localcon = localcon;
//# sourceMappingURL=localconn.js.map