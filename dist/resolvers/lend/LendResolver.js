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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LendResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const lend_1 = require("../../entity/lend");
let ReservationInputa = class ReservationInputa {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ReservationInputa.prototype, "id_reserva", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    __metadata("design:type", String)
], ReservationInputa.prototype, "fecha_hora", void 0);
ReservationInputa = __decorate([
    (0, type_graphql_1.InputType)()
], ReservationInputa);
let LendInput = class LendInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Date)
], LendInput.prototype, "fecha_hora_presta", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Date)
], LendInput.prototype, "fecha_vencimiento", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", Date)
], LendInput.prototype, "fecha_devolucion", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => ReservationInputa),
    __metadata("design:type", ReservationInputa)
], LendInput.prototype, "reservation", void 0);
LendInput = __decorate([
    (0, type_graphql_1.InputType)()
], LendInput);
let LendResolver = class LendResolver {
    async hello() {
        return "hello";
    }
    async lend() {
        const lend = await (0, typeorm_1.getRepository)(lend_1.Lend)
            .createQueryBuilder("lend")
            .innerJoinAndSelect("lend.reservation", "reservation")
            .innerJoinAndSelect("reservation.material", "material")
            .innerJoinAndSelect("reservation.user", "user")
            .getMany();
        return lend;
    }
    async createLend(data) {
        return lend_1.Lend.create(Object.assign({}, data)).save();
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LendResolver.prototype, "hello", null);
__decorate([
    (0, type_graphql_1.Query)(() => [lend_1.Lend]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LendResolver.prototype, "lend", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => lend_1.Lend),
    __param(0, (0, type_graphql_1.Arg)("data", () => LendInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LendInput]),
    __metadata("design:returntype", Promise)
], LendResolver.prototype, "createLend", null);
LendResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], LendResolver);
exports.LendResolver = LendResolver;
//# sourceMappingURL=LendResolver.js.map