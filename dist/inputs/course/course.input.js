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
exports.UpdateCourse = exports.NewCourse = void 0;
const type_graphql_1 = require("type-graphql");
let NewCourse = class NewCourse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NewCourse.prototype, "course_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], NewCourse.prototype, "course_token", void 0);
NewCourse = __decorate([
    (0, type_graphql_1.InputType)()
], NewCourse);
exports.NewCourse = NewCourse;
let UpdateCourse = class UpdateCourse {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCourse.prototype, "course_name", void 0);
UpdateCourse = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateCourse);
exports.UpdateCourse = UpdateCourse;
//# sourceMappingURL=course.input.js.map