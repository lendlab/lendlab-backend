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
exports.UserSubscription = void 0;
const user_1 = require("../../entity/user");
const type_graphql_1 = require("type-graphql");
let UserSubscription = class UserSubscription {
    newUserSubscription(payload) {
        return payload;
    }
};
__decorate([
    (0, type_graphql_1.Subscription)({ topics: "CREATE_USER" }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", user_1.User)
], UserSubscription.prototype, "newUserSubscription", null);
UserSubscription = __decorate([
    (0, type_graphql_1.Resolver)()
], UserSubscription);
exports.UserSubscription = UserSubscription;
//# sourceMappingURL=user.subscription.js.map