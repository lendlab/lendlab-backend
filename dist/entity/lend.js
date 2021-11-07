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
exports.Lend = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const reservation_1 = require("./reservation");
let Lend = class Lend extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lend.prototype, "id_lend", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.PrimaryColumn)({ default: () => "now()", type: "timestamp" }),
    __metadata("design:type", Date)
], Lend.prototype, "fecha_hora_presta", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Lend.prototype, "fecha_vencimiento", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Lend.prototype, "fecha_devolucion", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => reservation_1.Reservation, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => reservation_1.Reservation, (reservation) => reservation.lend, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", reservation_1.Reservation)
], Lend.prototype, "reservation", void 0);
Lend = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Lend);
exports.Lend = Lend;
//# sourceMappingURL=lend.js.map