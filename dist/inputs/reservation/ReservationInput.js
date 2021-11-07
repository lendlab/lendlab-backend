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
exports.ReservationSessionInput = exports.ReservationInput = void 0;
const type_graphql_1 = require("type-graphql");
let Reservation_Institution = class Reservation_Institution {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Reservation_Institution.prototype, "id_institution", void 0);
Reservation_Institution = __decorate([
    (0, type_graphql_1.InputType)()
], Reservation_Institution);
let UserReservationInput = class UserReservationInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UserReservationInput.prototype, "cedula", void 0);
UserReservationInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserReservationInput);
let MaterialReservationInput = class MaterialReservationInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], MaterialReservationInput.prototype, "id_material", void 0);
MaterialReservationInput = __decorate([
    (0, type_graphql_1.InputType)()
], MaterialReservationInput);
let ReservationInput = class ReservationInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ReservationInput.prototype, "id_reserva", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ReservationInput.prototype, "finalizada", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], ReservationInput.prototype, "fecha_hora", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => UserReservationInput),
    __metadata("design:type", UserReservationInput)
], ReservationInput.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => MaterialReservationInput),
    __metadata("design:type", MaterialReservationInput)
], ReservationInput.prototype, "material", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Reservation_Institution),
    __metadata("design:type", Reservation_Institution)
], ReservationInput.prototype, "institution", void 0);
ReservationInput = __decorate([
    (0, type_graphql_1.InputType)()
], ReservationInput);
exports.ReservationInput = ReservationInput;
let UserReservationSessionInput = class UserReservationSessionInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UserReservationSessionInput.prototype, "cedula", void 0);
UserReservationSessionInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserReservationSessionInput);
let MaterialReservationSessionInput = class MaterialReservationSessionInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], MaterialReservationSessionInput.prototype, "id_material", void 0);
MaterialReservationSessionInput = __decorate([
    (0, type_graphql_1.InputType)()
], MaterialReservationSessionInput);
let ReservationSessionInput = class ReservationSessionInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ReservationSessionInput.prototype, "id_reserva", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ReservationSessionInput.prototype, "finalizada", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], ReservationSessionInput.prototype, "fecha_hora", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => UserReservationSessionInput, { nullable: true }),
    __metadata("design:type", UserReservationSessionInput)
], ReservationSessionInput.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => MaterialReservationSessionInput),
    __metadata("design:type", MaterialReservationSessionInput)
], ReservationSessionInput.prototype, "material", void 0);
ReservationSessionInput = __decorate([
    (0, type_graphql_1.InputType)()
], ReservationSessionInput);
exports.ReservationSessionInput = ReservationSessionInput;
//# sourceMappingURL=ReservationInput.js.map