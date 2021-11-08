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
exports.ReservationEditInput = void 0;
const type_graphql_1 = require("type-graphql");
let UserReservationEditInput = class UserReservationEditInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UserReservationEditInput.prototype, "cedula", void 0);
UserReservationEditInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserReservationEditInput);
let MaterialReservationEditInput = class MaterialReservationEditInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], MaterialReservationEditInput.prototype, "id_material", void 0);
MaterialReservationEditInput = __decorate([
    (0, type_graphql_1.InputType)()
], MaterialReservationEditInput);
let ReservationEditInput = class ReservationEditInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], ReservationEditInput.prototype, "finalizada", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Date)
], ReservationEditInput.prototype, "fecha_hora", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => UserReservationEditInput, { nullable: true }),
    __metadata("design:type", UserReservationEditInput)
], ReservationEditInput.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => MaterialReservationEditInput, { nullable: true }),
    __metadata("design:type", MaterialReservationEditInput)
], ReservationEditInput.prototype, "material", void 0);
ReservationEditInput = __decorate([
    (0, type_graphql_1.InputType)()
], ReservationEditInput);
exports.ReservationEditInput = ReservationEditInput;
//# sourceMappingURL=ReservationEditInput.js.map