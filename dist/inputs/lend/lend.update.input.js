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
exports.LendUpdateInput = void 0;
const type_graphql_1 = require("type-graphql");
let ReservationUpdateInput = class ReservationUpdateInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ReservationUpdateInput.prototype, "id_reserva", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], ReservationUpdateInput.prototype, "fecha_hora", void 0);
ReservationUpdateInput = __decorate([
    (0, type_graphql_1.InputType)()
], ReservationUpdateInput);
let LendUpdateInput = class LendUpdateInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], LendUpdateInput.prototype, "fecha_vencimiento", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], LendUpdateInput.prototype, "fecha_devolucion", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => ReservationUpdateInput, { nullable: true }),
    __metadata("design:type", ReservationUpdateInput)
], LendUpdateInput.prototype, "reservation", void 0);
LendUpdateInput = __decorate([
    (0, type_graphql_1.InputType)()
], LendUpdateInput);
exports.LendUpdateInput = LendUpdateInput;
//# sourceMappingURL=lend.update.input.js.map