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
exports.User = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const course_1 = require("./course");
const institution_1 = require("./institution");
const lend_1 = require("./lend");
const reservation_1 = require("./reservation");
var userType;
(function (userType) {
    userType["laboratorista"] = "Laboratorista";
    userType["alumno"] = "Alumno";
    userType["director"] = "Director";
    userType["admin"] = "Admin";
})(userType || (userType = {}));
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryColumn)({ unique: true }),
    __metadata("design:type", Number)
], User.prototype, "cedula", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "direccion", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "foto_usuario", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "telefono", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ enum: userType, type: "enum" }),
    __metadata("design:type", String)
], User.prototype, "tipo_usuario", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", String)
], User.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => institution_1.Institution),
    (0, typeorm_1.ManyToOne)(() => institution_1.Institution, (institution) => institution.user),
    __metadata("design:type", institution_1.Institution)
], User.prototype, "institution", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => course_1.Course),
    (0, typeorm_1.ManyToOne)(() => course_1.Course, (course) => course.user),
    __metadata("design:type", course_1.Course)
], User.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_1.Reservation, (reservation) => reservation.user),
    __metadata("design:type", Promise)
], User.prototype, "reservation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lend_1.Lend, (lend) => lend.laboratorist),
    __metadata("design:type", Promise)
], User.prototype, "lend", void 0);
User = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.js.map