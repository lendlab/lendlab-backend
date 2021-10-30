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
exports.Laboratorist = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const lend_1 = require("./lend");
const user_1 = require("./user");
var Turns;
(function (Turns) {
    Turns["vespertino"] = "vespertino";
    Turns["matutino"] = "matutino";
})(Turns || (Turns = {}));
let Laboratorist = class Laboratorist extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => user_1.User),
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.laboratorist, {
        onDelete: "CASCADE",
        primary: true,
    }),
    __metadata("design:type", user_1.User)
], Laboratorist.prototype, "ci_laboratorist", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => lend_1.Lend),
    (0, typeorm_1.OneToMany)(() => lend_1.Lend, (lend) => lend.laboratorist),
    __metadata("design:type", Promise)
], Laboratorist.prototype, "lend", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: "enum", enum: Turns }),
    __metadata("design:type", String)
], Laboratorist.prototype, "turn", void 0);
Laboratorist = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Laboratorist);
exports.Laboratorist = Laboratorist;
//# sourceMappingURL=laboratorist.js.map