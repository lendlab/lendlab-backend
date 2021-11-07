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
exports.MaterialUpdateInput = void 0;
const type_graphql_1 = require("type-graphql");
let institution_material_update = class institution_material_update {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], institution_material_update.prototype, "id_institution", void 0);
institution_material_update = __decorate([
    (0, type_graphql_1.InputType)()
], institution_material_update);
let MaterialUpdateInput = class MaterialUpdateInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MaterialUpdateInput.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MaterialUpdateInput.prototype, "etiqueta", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MaterialUpdateInput.prototype, "categoria", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MaterialUpdateInput.prototype, "descripcion", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], MaterialUpdateInput.prototype, "cantidad", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MaterialUpdateInput.prototype, "foto", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MaterialUpdateInput.prototype, "estado", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => institution_material_update, { nullable: true }),
    __metadata("design:type", institution_material_update)
], MaterialUpdateInput.prototype, "institution", void 0);
MaterialUpdateInput = __decorate([
    (0, type_graphql_1.InputType)()
], MaterialUpdateInput);
exports.MaterialUpdateInput = MaterialUpdateInput;
//# sourceMappingURL=MaterialUpdateInput.js.map