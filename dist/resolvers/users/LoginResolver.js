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
exports.LoginResolver = void 0;
const type_graphql_1 = require("type-graphql");
const argon2_1 = __importDefault(require("argon2"));
const User_errors_1 = require("../../errors/User.errors");
const user_1 = require("../../entity/user");
let CedulaPasswordInput = class CedulaPasswordInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CedulaPasswordInput.prototype, "cedula", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CedulaPasswordInput.prototype, "password", void 0);
CedulaPasswordInput = __decorate([
    (0, type_graphql_1.InputType)()
], CedulaPasswordInput);
class LoginResolver {
    async login(options, { req }) {
        const user = await user_1.User.findOne({ cedula: options.cedula });
        if (!user) {
            return {
                errors: [{ field: "cedula", message: "Esta cedula no existe" }],
            };
        }
        const valid = await argon2_1.default.verify(user.password, options.password);
        if (!valid) {
            return {
                errors: [{ field: "password", message: "La constraseña es incorrecta" }],
            };
        }
        console.log(user);
        req.session.cedula = user.cedula;
        return { user };
    }
}
__decorate([
    (0, type_graphql_1.Mutation)(() => User_errors_1.UserResponse),
    __param(0, (0, type_graphql_1.Arg)("options")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CedulaPasswordInput, Object]),
    __metadata("design:returntype", Promise)
], LoginResolver.prototype, "login", null);
exports.LoginResolver = LoginResolver;
//# sourceMappingURL=LoginResolver.js.map