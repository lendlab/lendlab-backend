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
let CourseResolver = class CourseResolver {
    async getCourses() {
        return course_1.Course.find();
    }
    async createNewCourse(data) {
        const genToken = (lenght) => {
            let result = "";
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charLenght = characters.length;
            for (let i = 0; i < lenght; i++) {
                result += characters.charAt(Math.floor(Math.random() * charLenght));
            }
            return result;
        };
        const token = data.course_token + genToken(10);
        const newCourse = await course_1.Course.create({
            course_name: data.course_name,
            course_token: token,
        }).save();
        return newCourse;
    }
    async updateCourse(course_token, course_name) {
        await course_1.Course.update({ course_token }, course_name);
        const updatedCourse = course_1.Course.findOne(course_token);
        if (!updatedCourse) {
            return null;
        }
        return updatedCourse;
    }
    async deleteCourse(course_token) {
        await course_1.Course.delete(course_token);
        return true;
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
    (0, type_graphql_1.Mutation)(() => course_1.Course),
    __param(0, (0, type_graphql_1.Arg)("course_token", () => String)),
    __param(1, (0, type_graphql_1.Arg)("course_name", () => course_input_1.UpdateCourse)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, course_input_1.UpdateCourse]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "updateCourse", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("course_token", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "deleteCourse", null);
CourseResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CourseResolver);
exports.CourseResolver = CourseResolver;
//# sourceMappingURL=CourseResolver.js.map