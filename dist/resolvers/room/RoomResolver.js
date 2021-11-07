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
exports.RoomResolver = void 0;
const room_1 = require("../../entity/room");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const room_input_1 = require("../../inputs/room/room.input");
let RoomResolver = class RoomResolver {
    async gerAllRooms() {
        const room = (0, typeorm_1.getRepository)(room_1.Room)
            .createQueryBuilder("room")
            .innerJoinAndSelect("room.institution", "institution")
            .getMany();
        return room;
    }
    async getRoomByNumber(room_number) {
        const room = (0, typeorm_1.getRepository)(room_1.Room)
            .createQueryBuilder("room")
            .innerJoinAndSelect("room.institution", "institution")
            .where(`room.room_number = ${room_number}`)
            .getOne();
        return room;
    }
    async createRoom(data, pubsub) {
        const room = await room_1.Room.create(Object.assign({}, data)).save();
        pubsub.publish("CRATE_ROOM", room);
        return room;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [room_1.Room]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "gerAllRooms", null);
__decorate([
    (0, type_graphql_1.Query)(() => room_1.Room),
    __param(0, (0, type_graphql_1.Arg)("room_number", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "getRoomByNumber", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => room_1.Room, { nullable: false }),
    __param(0, (0, type_graphql_1.Arg)("data", () => room_input_1.RoomInput)),
    __param(1, (0, type_graphql_1.PubSub)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_input_1.RoomInput,
        type_graphql_1.PubSubEngine]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "createRoom", null);
RoomResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RoomResolver);
exports.RoomResolver = RoomResolver;
//# sourceMappingURL=RoomResolver.js.map