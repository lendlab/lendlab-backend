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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Occupies = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const room_1 = require("./room");
const user_1 = require("./user");
let Occupies = class Occupies extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => user_1.User),
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.ocuppies, {
        onDelete: "CASCADE",
        primary: true,
    }),
    __metadata("design:type", user_1.User)
], Occupies.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => room_1.Room),
    (0, typeorm_1.ManyToOne)(() => room_1.Room, { onDelete: "CASCADE", primary: true }),
    __metadata("design:type", room_1.Room)
], Occupies.prototype, "room", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Occupies.prototype, "fecha_hora_inicio", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Occupies.prototype, "fecha_hora_fin", void 0);
Occupies = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Occupies);
exports.Occupies = Occupies;
//# sourceMappingURL=occupies.js.map