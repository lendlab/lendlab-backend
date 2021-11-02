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
exports.IncidentInput = void 0;
const type_graphql_1 = require("type-graphql");
let material_incident_id = class material_incident_id {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], material_incident_id.prototype, "id_material", void 0);
material_incident_id = __decorate([
    (0, type_graphql_1.InputType)()
], material_incident_id);
let IncidentInput = class IncidentInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], IncidentInput.prototype, "observations", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], IncidentInput.prototype, "repairs", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], IncidentInput.prototype, "complaint", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], IncidentInput.prototype, "solved", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", Date)
], IncidentInput.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => material_incident_id),
    __metadata("design:type", material_incident_id)
], IncidentInput.prototype, "material", void 0);
IncidentInput = __decorate([
    (0, type_graphql_1.InputType)()
], IncidentInput);
exports.IncidentInput = IncidentInput;
//# sourceMappingURL=incident.input.js.map