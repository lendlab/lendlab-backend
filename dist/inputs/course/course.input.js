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
exports.AddUserToCourse = exports.NewCourse = void 0;
const type_graphql_1 = require("type-graphql");
let userCi = class userCi {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], userCi.prototype, "cedula", void 0);
userCi = __decorate([
    (0, type_graphql_1.InputType)()
], userCi);
let course_data = class course_data {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], course_data.prototype, "course_name", void 0);
course_data = __decorate([
    (0, type_graphql_1.InputType)()
], course_data);
let NewCourse = class NewCourse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NewCourse.prototype, "course_name", void 0);
NewCourse = __decorate([
    (0, type_graphql_1.InputType)()
], NewCourse);
exports.NewCourse = NewCourse;
let AddUserToCourse = class AddUserToCourse {
};
__decorate([
    (0, type_graphql_1.Field)(() => course_data),
    __metadata("design:type", course_data)
], AddUserToCourse.prototype, "course", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => userCi),
    __metadata("design:type", userCi)
], AddUserToCourse.prototype, "user", void 0);
AddUserToCourse = __decorate([
    (0, type_graphql_1.InputType)()
], AddUserToCourse);
exports.AddUserToCourse = AddUserToCourse;
//# sourceMappingURL=course.input.js.map