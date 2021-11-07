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
exports.MaterialSubscription = void 0;
const type_graphql_1 = require("type-graphql");
const material_1 = require("../../entity/material");
let MaterialSubscription = class MaterialSubscription {
    newMaterialSubscription(payload) {
        return payload;
    }
};
__decorate([
    (0, type_graphql_1.Subscription)({ topics: "CREATE_MATERIAL" }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [material_1.Material]),
    __metadata("design:returntype", material_1.Material)
], MaterialSubscription.prototype, "newMaterialSubscription", null);
MaterialSubscription = __decorate([
    (0, type_graphql_1.Resolver)()
], MaterialSubscription);
exports.MaterialSubscription = MaterialSubscription;
//# sourceMappingURL=material.subscription.js.map