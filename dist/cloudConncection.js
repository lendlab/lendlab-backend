"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudConnection = void 0;
require("dotenv/config");
const fs_1 = __importDefault(require("fs"));
const typeorm_1 = require("typeorm");
const cloudConnection = async () => {
    await (0, typeorm_1.createConnection)({
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
        logging: false,
        ssl: { ca: fs_1.default.readFileSync("./ca-certificate.crt") },
        entities: [__dirname, "./dist/entity/*.*"],
    });
};
exports.cloudConnection = cloudConnection;
//# sourceMappingURL=cloudConncection.js.map