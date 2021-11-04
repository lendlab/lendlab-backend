import {Material} from "../../entity/material";
import {
  Arg,
  Int,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
} from "type-graphql";
import {MaterialInput} from "../../inputs/material/MaterialInput";
import {MaterialUpdateInput} from "../../inputs/material/MaterialUpdateInput";
import {
  createQueryBuilder,
  getConnection,
  getManager,
  getRepository,
  Like,
} from "typeorm";

@Resolver()
export class MaterialResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }

  @Query(() => [Material])
  async getMaterials() {
    const material_list = await Material.find({relations: ["institution"]});
    return material_list;
  }

  @Query(() => [Material])
  async paginatedMaterials(
    @Arg("limit", () => Int, {nullable: true}) limit: number
  ) {
    const material = await getConnection().query(
      `
      SELECT * from material order by nombre DESC LIMIT ${limit}
      `
    );

    return material;
  }
  //get all

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

  @Query(() => Int)
  async getMaterialsCount() {
    const {count} = await createQueryBuilder("material")
      .select("COUNT(*)", "count")
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
  async newMaterial(
    @Arg("data", () => MaterialInput)
    data: MaterialInput
  ): Promise<Material> {
    const material = await Material.create(data).save();
    return material;
  }
  //update
  @Mutation(() => Material, {nullable: true})
  async updateMaterial(
    @Arg("id_material", () => Int) id_material: number,
    @Arg("data", () => MaterialUpdateInput)
    data: MaterialUpdateInput
  ) {
    await Material.update({id_material}, data);
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
    await Material.delete({id_material});
    return true;
  }

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

  //@Subscription(() => Material, {
  //  topics: "MATERIAL_LIST",
  //  filter: ({payload, args}) => args.priorities.includes(payload.priority),
  //})
  //materialList(
  //  @Root() payload: Material,
  //  @Arg("data") args: MaterialUpdateInput
  //): Material {
  //  console.log(args.nombre);
  //  return payload;
  //}
  //
  //@Query(() => [Material])
  //async getMaterials(@PubSub() pubsub: PubSubEngine) {
  //  const material_list = await Material.find({relations: ["institution"]});
  //
  //  await pubsub.asyncIterator(["MATERIAL_LIST"]);
  //
  //  return material_list;
  //}
}
