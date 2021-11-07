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
exports.InstitutionResolver = void 0;
const type_graphql_1 = require("type-graphql");
const corresponds_1 = require("../../entity/corresponds");
const institution_1 = require("../../entity/institution");
const InstitutionInput_1 = require("../../inputs/institution/InstitutionInput");
let InstitutionResolver = class InstitutionResolver {
    async getInstitutions() {
        return institution_1.Institution.find();
    }
    async newInstitution(data) {
        const createInstitution = await institution_1.Institution.create(data).save();
        return createInstitution;
    }
    async updateInstitution(data, id_institution) {
        await institution_1.Institution.update({ id_institution }, data);
        const updatedInstitution = institution_1.Institution.findOne(id_institution);
        if (!updatedInstitution) {
            return null;
        }
        return updatedInstitution;
    }
    async deleteInstitution(id_institution) {
        await institution_1.Institution.delete({ id_institution });
        return true;
    }
    async addCourseToInstitution(data) {
        const addCourseToInstitution = await corresponds_1.Corresponds.create(Object.assign({}, data)).save();
        return addCourseToInstitution;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [institution_1.Institution]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InstitutionResolver.prototype, "getInstitutions", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => institution_1.Institution),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InstitutionInput_1.InstitutionInput]),
    __metadata("design:returntype", Promise)
], InstitutionResolver.prototype, "newInstitution", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => institution_1.Institution, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Arg)("id_institution", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InstitutionInput_1.InstitutionUpdateInput, Number]),
    __metadata("design:returntype", Promise)
], InstitutionResolver.prototype, "updateInstitution", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id_institution", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstitutionResolver.prototype, "deleteInstitution", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => corresponds_1.Corresponds),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InstitutionInput_1.AddCourseToInstitution]),
    __metadata("design:returntype", Promise)
], InstitutionResolver.prototype, "addCourseToInstitution", null);
InstitutionResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], InstitutionResolver);
exports.InstitutionResolver = InstitutionResolver;
//# sourceMappingURL=InstitutionResolver.js.map