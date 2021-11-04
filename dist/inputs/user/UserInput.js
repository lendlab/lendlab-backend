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
exports.UserInput = void 0;
const type_graphql_1 = require("type-graphql");
let user_course = class user_course {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], user_course.prototype, "course_id", void 0);
user_course = __decorate([
    (0, type_graphql_1.InputType)()
], user_course);
let user_institution = class user_institution {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], user_institution.prototype, "id_institution", void 0);
user_institution = __decorate([
    (0, type_graphql_1.InputType)()
], user_institution);
let UserInput = class UserInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UserInput.prototype, "cedula", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "direccion", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "foto_usuario", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UserInput.prototype, "telefono", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "tipo_usuario", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_institution),
    __metadata("design:type", user_institution)
], UserInput.prototype, "institution", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_course),
    __metadata("design:type", user_course)
], UserInput.prototype, "course", void 0);
UserInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserInput);
exports.UserInput = UserInput;
//# sourceMappingURL=UserInput.js.map