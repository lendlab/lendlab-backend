"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
require("dotenv/config");
const mysql_1 = __importDefault(require("mysql"));
const fs_1 = __importDefault(require("fs"));
exports.connection = mysql_1.default.createConnection({
    host: process.env.MYSQL_URI,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: 25060,
    ssl: { ca: fs_1.default.readFileSync("./ca-certificate.crt") },
});
//# sourceMappingURL=slqconnection.js.map