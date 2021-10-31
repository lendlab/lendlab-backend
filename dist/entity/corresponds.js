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
exports.Corresponds = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const course_1 = require("./course");
const institution_1 = require("./institution");
let Corresponds = class Corresponds extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.ManyToOne)(() => institution_1.Institution, (institution) => institution.id_institution, {
        primary: true,
    }),
    __metadata("design:type", institution_1.Institution)
], Corresponds.prototype, "institution", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.ManyToOne)(() => course_1.Course, (course) => course.course_name, {
        primary: true,
    }),
    __metadata("design:type", course_1.Course)
], Corresponds.prototype, "course", void 0);
Corresponds = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Corresponds);
exports.Corresponds = Corresponds;
//# sourceMappingURL=corresponds.js.map