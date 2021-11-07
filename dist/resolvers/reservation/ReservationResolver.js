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
exports.ReservationResolver = void 0;
const typeorm_1 = require("typeorm");
const reservation_1 = require("../../entity/reservation");
const type_graphql_1 = require("type-graphql");
const ReservationInput_1 = require("../../inputs/reservation/ReservationInput");
const ReservationEditInput_1 = require("../../inputs/reservation/ReservationEditInput");
const Reservation_errors_1 = require("../../errors/Reservation.errors");
let ReservationResolver = class ReservationResolver {
    async hello() {
        return "hello";
    }
    async getReservations() {
        const rs = (0, typeorm_1.getRepository)(reservation_1.Reservation)
            .createQueryBuilder("reservation")
            .innerJoinAndSelect("reservation.material", "material")
            .innerJoinAndSelect("reservation.user", "user")
            .innerJoinAndSelect("user.course", "course")
            .innerJoinAndSelect("user.institution", "institution")
            .getMany();
        return rs;
    }
    async getMaxId() {
        const { max } = await (0, typeorm_1.createQueryBuilder)("reservation")
            .select("MAX(id_reserva)", "max")
            .getRawOne();
        return max;
    }
    async getReservationsCount() {
        const { count } = await (0, typeorm_1.createQueryBuilder)("reservation")
            .select("COUNT(distinct id_reserva)", "count")
            .getRawOne();
        return count;
    }
    async createReservation(data, pubsub) {
        const reservation = await reservation_1.Reservation.create(Object.assign({}, data)).save();
        pubsub.publish("CREATE_RESERVATION", reservation);
        if (!reservation) {
            return {
                errors: [{ field: "a", message: "a" }],
            };
        }
        return { reservation };
    }
    async createReservationUserSession(data, { req }) {
        const ci = req.session.cedula;
        console.log(ci);
        const reservationSession = await reservation_1.Reservation.create(Object.assign({}, data)).save();
        return reservationSession;
    }
    async updateReservation(id_reserva, data) {
        await reservation_1.Reservation.update({ id_reserva }, data);
        const updatedReservations = await reservation_1.Reservation.find({
            id_reserva,
        });
        return updatedReservations;
    }
    async deleteReservation(id_reserva) {
        await reservation_1.Reservation.delete({ id_reserva });
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservationResolver.prototype, "hello", null);
__decorate([
    (0, type_graphql_1.Query)(() => [reservation_1.Reservation]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservationResolver.prototype, "getReservations", null);
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_1.Int),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservationResolver.prototype, "getMaxId", null);
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_1.Int),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservationResolver.prototype, "getReservationsCount", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Reservation_errors_1.ReservationResponse, { nullable: false }),
    __param(0, (0, type_graphql_1.Arg)("data", () => ReservationInput_1.ReservationInput)),
    __param(1, (0, type_graphql_1.PubSub)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReservationInput_1.ReservationInput,
        type_graphql_1.PubSubEngine]),
    __metadata("design:returntype", Promise)
], ReservationResolver.prototype, "createReservation", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => reservation_1.Reservation),
    __param(0, (0, type_graphql_1.Arg)("data", () => ReservationInput_1.ReservationSessionInput)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReservationInput_1.ReservationSessionInput, Object]),
    __metadata("design:returntype", Promise)
], ReservationResolver.prototype, "createReservationUserSession", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => [reservation_1.Reservation], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id_reserva", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("data", () => ReservationEditInput_1.ReservationEditInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, ReservationEditInput_1.ReservationEditInput]),
    __metadata("design:returntype", Promise)
], ReservationResolver.prototype, "updateReservation", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id_reserva", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservationResolver.prototype, "deleteReservation", null);
ReservationResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ReservationResolver);
exports.ReservationResolver = ReservationResolver;
//# sourceMappingURL=ReservationResolver.js.map