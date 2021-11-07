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
exports.Material = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const incident_1 = require("./incident");
const institution_1 = require("./institution");
const reservation_1 = require("./reservation");
let Material = class Material extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Material.prototype, "id_material", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Material.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Material.prototype, "etiqueta", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Material.prototype, "categoria", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Material.prototype, "descripcion", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Material.prototype, "cantidad", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Material.prototype, "estado", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => institution_1.Institution),
    (0, typeorm_1.ManyToOne)(() => institution_1.Institution, (institution) => institution.material, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", institution_1.Institution)
], Material.prototype, "institution", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_1.Reservation, (reservation) => reservation.material),
    __metadata("design:type", Promise)
], Material.prototype, "reservation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => incident_1.Incident, (incident) => incident.material),
    __metadata("design:type", Promise)
], Material.prototype, "incident", void 0);
Material = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Material);
exports.Material = Material;
//# sourceMappingURL=material.js.map