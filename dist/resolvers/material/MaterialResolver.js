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
exports.MaterialResolver = void 0;
const material_1 = require("../../entity/material");
const type_graphql_1 = require("type-graphql");
const MaterialInput_1 = require("../../inputs/material/MaterialInput");
const MaterialUpdateInput_1 = require("../../inputs/material/MaterialUpdateInput");
const typeorm_1 = require("typeorm");
let MaterialResolver = class MaterialResolver {
    async hello() {
        return "hello";
    }
    async getMaterials() {
        const material_list = await material_1.Material.find({ relations: ["institution"] });
        return material_list;
    }
    async paginatedMaterials(limit) {
        const material = await (0, typeorm_1.getConnection)().query(`
      SELECT * from material order by nombre DESC LIMIT ${limit}
      `);
        return material;
    }
    async getMaterial(id_material) {
        const material = await material_1.Material.find({ id_material });
        return material;
    }
    async getMaterialsCount() {
        const { count } = await (0, typeorm_1.createQueryBuilder)("material")
            .select("COUNT(*)", "count")
            .getRawOne();
        return count;
    }
    async getPopularMaterials() {
        const popularMaterials = await (0, typeorm_1.getManager)()
            .createQueryBuilder(material_1.Material, "material")
            .innerJoin("material.reservation", "reservation")
            .groupBy("reservation.materialIdMaterial")
            .orderBy("SUM(reservation.materialIdMaterial)", "DESC")
            .limit(3)
            .getMany();
        return popularMaterials;
    }
    async getMaterialSearch(nombre) {
        const material = await material_1.Material.find({
            nombre: (0, typeorm_1.Like)(`${nombre}%`),
        });
        return material;
    }
    async newMaterial(data) {
        const material = await material_1.Material.create(data).save();
        return material;
    }
    async updateMaterial(id_material, data) {
        await material_1.Material.update({ id_material }, data);
        const updatedMaterial = material_1.Material.findOne(id_material);
        if (!updatedMaterial) {
            return null;
        }
        return updatedMaterial;
    }
    async deleteMaterial(id_material) {
        await material_1.Material.delete({ id_material });
        return true;
    }
    newNotification(payload) {
        return payload;
    }
    async subMaterial(data, pubsub) {
        const material = await material_1.Material.create(data).save();
        pubsub.publish("NOTIFICATIONS", material);
        return material;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "hello", null);
__decorate([
    (0, type_graphql_1.Query)(() => [material_1.Material]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "getMaterials", null);
__decorate([
    (0, type_graphql_1.Query)(() => [material_1.Material]),
    __param(0, (0, type_graphql_1.Arg)("limit", () => type_graphql_1.Int, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "paginatedMaterials", null);
__decorate([
    (0, type_graphql_1.Query)(() => [material_1.Material]),
    __param(0, (0, type_graphql_1.Arg)("id_material", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "getMaterial", null);
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_1.Int),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "getMaterialsCount", null);
__decorate([
    (0, type_graphql_1.Query)(() => [material_1.Material]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "getPopularMaterials", null);
__decorate([
    (0, type_graphql_1.Query)(() => [material_1.Material]),
    __param(0, (0, type_graphql_1.Arg)("nombre", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "getMaterialSearch", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => material_1.Material),
    __param(0, (0, type_graphql_1.Arg)("data", () => MaterialInput_1.MaterialInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MaterialInput_1.MaterialInput]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "newMaterial", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => material_1.Material, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id_material", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("data", () => MaterialUpdateInput_1.MaterialUpdateInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, MaterialUpdateInput_1.MaterialUpdateInput]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "updateMaterial", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id_material", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "deleteMaterial", null);
__decorate([
    (0, type_graphql_1.Subscription)({ topics: "NOTIFICATIONS" }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [material_1.Material]),
    __metadata("design:returntype", material_1.Material)
], MaterialResolver.prototype, "newNotification", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => material_1.Material),
    __param(0, (0, type_graphql_1.Arg)("data", () => MaterialInput_1.MaterialInput)),
    __param(1, (0, type_graphql_1.PubSub)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MaterialInput_1.MaterialInput,
        type_graphql_1.PubSubEngine]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "subMaterial", null);
MaterialResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MaterialResolver);
exports.MaterialResolver = MaterialResolver;
//# sourceMappingURL=MaterialResolver.js.map