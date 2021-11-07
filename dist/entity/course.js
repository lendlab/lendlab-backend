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
exports.Course = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const corresponds_1 = require("./corresponds");
const user_1 = require("./user");
let Course = class Course extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.PrimaryColumn)({ unique: true }),
    __metadata("design:type", String)
], Course.prototype, "course_token", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Course.prototype, "course_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => corresponds_1.Corresponds, (corresponds) => corresponds.course),
    __metadata("design:type", Promise)
], Course.prototype, "corresponds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_1.User, (user) => user.course),
    __metadata("design:type", Promise)
], Course.prototype, "user", void 0);
Course = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Course);
exports.Course = Course;
//# sourceMappingURL=course.js.map