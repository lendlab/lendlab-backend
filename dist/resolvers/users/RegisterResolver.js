"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterResolver = void 0;
const user_1 = require("../../entity/user");
const type_graphql_1 = require("type-graphql");
const argon2_1 = __importDefault(require("argon2"));
const UserInput_1 = require("../../inputs/user/UserInput");
let RegisterResolver = class RegisterResolver {
    async hello() {
        return "hello";
    }
    async getUsers() {
        const usersList = await user_1.User.find();
        return usersList;
    }
    async getUser(cedula) {
        const user = await user_1.User.find({ cedula });
        return user;
    }
    async register(data) {
        const hashedPassword = await argon2_1.default.hash(data.password);
        const user = await user_1.User.create({
            cedula: data.cedula,
            nombre: data.nombre,
            password: hashedPassword,
            direccion: data.direccion,
            foto_usuario: data.foto_usuario,
            telefono: data.telefono,
            tipo_usuario: data.tipo_usuario,
            fecha_nacimiento: data.fecha_nacimiento,
        }).save();
        return user;
    }
    async deleteUser(cedula) {
        const deletedUser = await user_1.User.delete({ cedula });
        return deletedUser.raw[0];
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "hello", null);
__decorate([
    (0, type_graphql_1.Query)(() => [user_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "getUsers", null);
__decorate([
    (0, type_graphql_1.Query)(() => [user_1.User]),
    __param(0, (0, type_graphql_1.Arg)("cedula", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "getUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.User),
    __param(0, (0, type_graphql_1.Arg)("data", () => UserInput_1.UserInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.UserInput]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("cedula", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "deleteUser", null);
RegisterResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RegisterResolver);
exports.RegisterResolver = RegisterResolver;
//# sourceMappingURL=RegisterResolver.js.map