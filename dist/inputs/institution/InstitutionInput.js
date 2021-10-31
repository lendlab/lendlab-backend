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
exports.AddCourseToInstitution = exports.InstitutionUpdateInput = exports.InstitutionInput = void 0;
const type_graphql_1 = require("type-graphql");
let InstitutionInput = class InstitutionInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInput.prototype, "institution_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInput.prototype, "city", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInput.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], InstitutionInput.prototype, "phone", void 0);
InstitutionInput = __decorate([
    (0, type_graphql_1.InputType)()
], InstitutionInput);
exports.InstitutionInput = InstitutionInput;
let InstitutionUpdateInput = class InstitutionUpdateInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InstitutionUpdateInput.prototype, "institution_name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InstitutionUpdateInput.prototype, "city", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InstitutionUpdateInput.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], InstitutionUpdateInput.prototype, "phone", void 0);
InstitutionUpdateInput = __decorate([
    (0, type_graphql_1.InputType)()
], InstitutionUpdateInput);
exports.InstitutionUpdateInput = InstitutionUpdateInput;
let course_data_institutio = class course_data_institutio {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], course_data_institutio.prototype, "course_name", void 0);
course_data_institutio = __decorate([
    (0, type_graphql_1.InputType)()
], course_data_institutio);
let institution_data = class institution_data {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], institution_data.prototype, "id_institution", void 0);
institution_data = __decorate([
    (0, type_graphql_1.InputType)()
], institution_data);
let AddCourseToInstitution = class AddCourseToInstitution {
};
__decorate([
    (0, type_graphql_1.Field)(() => institution_data),
    __metadata("design:type", institution_data)
], AddCourseToInstitution.prototype, "institution", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => course_data_institutio),
    __metadata("design:type", course_data_institutio)
], AddCourseToInstitution.prototype, "course", void 0);
AddCourseToInstitution = __decorate([
    (0, type_graphql_1.InputType)()
], AddCourseToInstitution);
exports.AddCourseToInstitution = AddCourseToInstitution;
//# sourceMappingURL=InstitutionInput.js.map