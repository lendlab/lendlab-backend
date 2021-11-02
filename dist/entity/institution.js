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
exports.Institution = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const corresponds_1 = require("./corresponds");
const material_1 = require("./material");
const user_1 = require("./user");
let Institution = class Institution extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Institution.prototype, "id_institution", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Institution.prototype, "institution_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Institution.prototype, "city", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Institution.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Institution.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_1.User, (user) => user.institution),
    __metadata("design:type", Promise)
], Institution.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => corresponds_1.Corresponds, (corresponds) => corresponds.institution),
    __metadata("design:type", Promise)
], Institution.prototype, "corresponds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => material_1.Material, (material) => material.institution),
    __metadata("design:type", Promise)
], Institution.prototype, "material", void 0);
Institution = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Institution);
exports.Institution = Institution;
//# sourceMappingURL=institution.js.map