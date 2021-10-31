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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResolver = void 0;
const type_graphql_1 = require("type-graphql");
const course_input_1 = require("../../inputs/course/course.input");
const course_1 = require("../../entity/course");
const belongs_1 = require("../../entity/belongs");
let CourseResolver = class CourseResolver {
    async getCourses() {
        return course_1.Course.find();
    }
    async createNewCourse(data) {
        const newCourse = await course_1.Course.create(Object.assign({}, data)).save();
        return newCourse;
    }
    async getUserCourse() {
        return belongs_1.Belongs.find({ relations: ["user", "course"] });
    }
    async addUserToCourse(data) {
        await belongs_1.Belongs.create(Object.assign({}, data)).save();
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [course_1.Course]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "getCourses", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => course_1.Course),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_input_1.NewCourse]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "createNewCourse", null);
__decorate([
    (0, type_graphql_1.Query)(() => [belongs_1.Belongs]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "getUserCourse", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => belongs_1.Belongs),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_input_1.AddUserToCourse]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "addUserToCourse", null);
CourseResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CourseResolver);
exports.CourseResolver = CourseResolver;
//# sourceMappingURL=CourseResolver.js.map