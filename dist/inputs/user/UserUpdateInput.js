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
exports.UserUpdateInput = void 0;
const type_graphql_1 = require("type-graphql");
let user_course_update = class user_course_update {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], user_course_update.prototype, "course_id", void 0);
user_course_update = __decorate([
    (0, type_graphql_1.InputType)()
], user_course_update);
let user_institution_update = class user_institution_update {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], user_institution_update.prototype, "id_institution", void 0);
user_institution_update = __decorate([
    (0, type_graphql_1.InputType)()
], user_institution_update);
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "direccion", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "foto_usuario", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UserUpdateInput.prototype, "telefono", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "tipo_usuario", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_institution_update, { nullable: true }),
    __metadata("design:type", user_institution_update)
], UserUpdateInput.prototype, "institution", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_course_update, { nullable: true }),
    __metadata("design:type", user_course_update)
], UserUpdateInput.prototype, "course", void 0);
UserUpdateInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
//# sourceMappingURL=UserUpdateInput.js.map