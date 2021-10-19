import { Material } from "../../entity/material";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { MaterialInput } from "../../inputs/material/MaterialInput";
import { MaterialUpdateInput } from "../../inputs/material/MaterialUpdateInput";

@Resolver()
export class MaterialResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }
  //get all
  @Query(() => [Material])
  async getMaterials() {
    const material_list = await Material.find();
    return material_list;
  }
  //get by id
  @Query(() => [Material])
  async getMaterial(@Arg("id_material", () => Int) id_material: number) {
    const material = await Material.find({ id_material });
    return material;
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
  @Mutation(() => Material, { nullable: true })
  async updateMaterial(
    @Arg("id_material", () => Int) id_material: number,
    @Arg("data", () => MaterialUpdateInput)
    data: MaterialUpdateInput
  ) {
    await Material.update({ id_material }, data);
    const updatedMaterial = Material.findOne(id_material);
    if(!updatedMaterial) {
      return null;
    }
    return updatedMaterial;
  }
  //delete
  @Mutation(() => Boolean )
  async deleteMaterial(
    @Arg("id_material", () => Int) id_material: number
  ): Promise<Boolean> {
    await Material.delete({ id_material });
    return true;
  }
}
