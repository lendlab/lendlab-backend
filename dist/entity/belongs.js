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
exports.Belongs = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const course_1 = require("./course");
const user_1 = require("./user");
let Belongs = class Belongs extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => user_1.User),
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.belongs, {
        onDelete: "CASCADE",
        primary: true,
    }),
    __metadata("design:type", user_1.User)
], Belongs.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => course_1.Course),
    (0, typeorm_1.ManyToOne)(() => course_1.Course, (course) => course.belongs, {
        onDelete: "CASCADE",
        primary: true,
    }),
    __metadata("design:type", course_1.Course)
], Belongs.prototype, "course", void 0);
Belongs = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Belongs);
exports.Belongs = Belongs;
//# sourceMappingURL=belongs.js.map