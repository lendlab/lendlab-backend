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
exports.Reservation = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const institution_1 = require("./institution");
const lend_1 = require("./lend");
const material_1 = require("./material");
const user_1 = require("./user");
let Reservation = class Reservation extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.PrimaryColumn)({ default: 1 }),
    __metadata("design:type", Number)
], Reservation.prototype, "id_reserva", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.CreateDateColumn)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Date)
], Reservation.prototype, "fecha_hora", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: true }),
    (0, type_graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Reservation.prototype, "finalizada", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lend_1.Lend, (lend) => lend.reservation),
    __metadata("design:type", Promise)
], Reservation.prototype, "lend", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_1.User, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.reservation, {
        onDelete: "CASCADE",
        cascade: true,
    }),
    __metadata("design:type", user_1.User)
], Reservation.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => material_1.Material, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => material_1.Material, (material) => material.reservation, {
        onDelete: "CASCADE",
        cascade: true,
    }),
    __metadata("design:type", material_1.Material)
], Reservation.prototype, "material", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => institution_1.Institution),
    (0, typeorm_1.ManyToOne)(() => institution_1.Institution, (institution) => institution.reservation),
    __metadata("design:type", institution_1.Institution)
], Reservation.prototype, "institution", void 0);
Reservation = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Reservation);
exports.Reservation = Reservation;
//# sourceMappingURL=reservation.js.map