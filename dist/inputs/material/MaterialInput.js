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
exports.MaterialInput = void 0;
const type_graphql_1 = require("type-graphql");
let MaterialInput = class MaterialInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MaterialInput.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MaterialInput.prototype, "etiqueta", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MaterialInput.prototype, "categoria", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MaterialInput.prototype, "descripcion", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], MaterialInput.prototype, "cantidad", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MaterialInput.prototype, "foto", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MaterialInput.prototype, "estado", void 0);
MaterialInput = __decorate([
    (0, type_graphql_1.InputType)()
], MaterialInput);
exports.MaterialInput = MaterialInput;
//# sourceMappingURL=MaterialInput.js.map