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
exports.RoomInput = void 0;
const type_graphql_1 = require("type-graphql");
let RoomInstitution = class RoomInstitution {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], RoomInstitution.prototype, "id_institution", void 0);
RoomInstitution = __decorate([
    (0, type_graphql_1.InputType)()
], RoomInstitution);
let RoomInput = class RoomInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], RoomInput.prototype, "TV", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], RoomInput.prototype, "room_number", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], RoomInput.prototype, "numberOfCharis", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RoomInput.prototype, "state", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => RoomInstitution),
    __metadata("design:type", RoomInstitution)
], RoomInput.prototype, "institution", void 0);
RoomInput = __decorate([
    (0, type_graphql_1.InputType)()
], RoomInput);
exports.RoomInput = RoomInput;
//# sourceMappingURL=room.input.js.map