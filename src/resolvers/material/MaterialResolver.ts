import {
  Arg,
  Int,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
} from "type-graphql";
import { createQueryBuilder, getManager, getRepository, Like } from "typeorm";

import { MaterialInput } from "../../inputs/material/MaterialInput";
import { MaterialUpdateInput } from "../../inputs/material/MaterialUpdateInput";
import { Material } from "../../entity/material";

@Resolver()
export class MaterialResolver {
  //get all
  @Query(() => [Material])
  async getMaterials() {
    //const material_list = await Material.find({relations: ["institution"]});
    //return material_list;

    const material = getRepository(Material)
      .createQueryBuilder("material")
      .innerJoinAndSelect("material.institution", "institution")
      .getMany();

    return material;
  }

  //get by id
  @Query(() => Material)
  async getMaterial(@Arg("id_material", () => Int) id_material: number) {
    const material = getRepository(Material)
      .createQueryBuilder("material")
      .innerJoinAndSelect("material.institution", "institution")
      .where(`material.id_material = ${id_material}`)
      .getOne();

    return material;
  }

  @Query(() => [Material])
  async getMaterialsByInstitution(
    @Arg("id_institution", () => Int) id_institution: number
  ) {
    const material = getRepository(Material)
      .createQueryBuilder("material")
      .innerJoinAndSelect("material.institution", "institution")
      .where("material.institution.id_institution = :institutionId", {
        institutionId: id_institution,
      })
      .getMany();

    return material;
  }

  @Query(() => Int)
  async getMaterialsCount(
    @Arg("id_institution", () => Int) id_institution: number
  ) {
    const { count } = await getRepository(Material);
      createQueryBuilder("material")
      .select("COUNT(*)", "count")
      .where("material.institution.id_institution = :institutionId", {
        institutionId: id_institution,
      })
      .getRawOne();

    return count;
  }

  @Query(() => [Material])
  async getPopularMaterials() {
    const popularMaterials = await getManager()
      .createQueryBuilder(Material, "material")
      .innerJoin("material.reservation", "reservation")
      .groupBy("reservation.materialIdMaterial")
      .orderBy("SUM(reservation.materialIdMaterial)", "DESC")
      .limit(3)
      .getMany();

    return popularMaterials;
    // select *
    // from material
    // JOIN
    // reservation where materialIdMaterial = material.id_material
    // group by materialIdMaterial
    // order by sum(materialIdMaterial) desc
    //  limit 5
  }

  @Query(() => [Material])
  async getMaterialSearch(@Arg("nombre", () => String) nombre: string) {
    const material = await Material.find({
      nombre: Like(`${nombre}%`),
    });
    return material;

    // select *
    // from material
    // JOIN
    // reservation where materialIdMaterial = material.id_material
    // group by materialIdMaterial
    // order by sum(materialIdMaterial) desc
    //  limit 5
  }

  //post
  @Mutation(() => Material)
  async subMaterial(
    @Arg("data", () => MaterialInput)
    data: MaterialInput,
    @PubSub() pubsub: PubSubEngine
  ): Promise<Material> {
    const material = await Material.create(data).save();
    pubsub.publish("CREATE_MATERIAL", material);
    return material;
  }

  //update
  @Mutation(() => Material, { nullable: true })
  async updateMaterial(
    @Arg("id_material", () => Int) id_material: number,
    @Arg("data", () => MaterialUpdateInput)
    data: MaterialUpdateInput
  ) {
    await Material.update({ id_material }, data);
    const updatedMaterial = Material.findOne(id_material);
    if (!updatedMaterial) {
      return null;
    }
    return updatedMaterial;
  }

  //delete
  @Mutation(() => Boolean)
  async deleteMaterial(
    @Arg("id_material", () => Int) id_material: number
  ): Promise<Boolean> {
    await Material.delete({ id_material });
    return true;
  }
}
