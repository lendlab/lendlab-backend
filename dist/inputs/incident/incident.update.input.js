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
exports.UpdateIncidentInput = void 0;
const type_graphql_1 = require("type-graphql");
let material_incident_id_update = class material_incident_id_update {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], material_incident_id_update.prototype, "id_material", void 0);
material_incident_id_update = __decorate([
    (0, type_graphql_1.InputType)()
], material_incident_id_update);
let UpdateIncidentInput = class UpdateIncidentInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateIncidentInput.prototype, "observations", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateIncidentInput.prototype, "repairs", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateIncidentInput.prototype, "complaint", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateIncidentInput.prototype, "solved", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Date)
], UpdateIncidentInput.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => material_incident_id_update, { nullable: true }),
    __metadata("design:type", material_incident_id_update)
], UpdateIncidentInput.prototype, "material", void 0);
UpdateIncidentInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateIncidentInput);
exports.UpdateIncidentInput = UpdateIncidentInput;
//# sourceMappingURL=incident.update.input.js.map