import {Arg, Int, Mutation, Query, Resolver} from "type-graphql";

import {Institution} from "../../entity/institution";
import {
  InstitutionInput,
  InstitutionUpdateInput,
} from "../../inputs/institution/InstitutionInput";

@Resolver()
export class InstitutionResolver {
  @Query(() => [Institution])
  async getInstitutions() {
    return Institution.find();
  }

  @Mutation(() => Institution)
  async newInstitution(
    @Arg("data") data: InstitutionInput
  ): Promise<Institution> {
    const createInstitution = await Institution.create(data).save();
    return createInstitution;
  }

  @Mutation(() => Institution, {nullable: true})
  async updateInstitution(
    @Arg("data") data: InstitutionUpdateInput,
    @Arg("id_institution", () => Int) id_institution: number
  ) {
    await Institution.update({id_institution}, data);
    const updatedInstitution = Institution.findOne(id_institution);
    if (!updatedInstitution) {
      return null;
    }
    return updatedInstitution;
  }

  @Mutation(() => Boolean)
  async deleteInstitution(
    @Arg("id_institution", () => Int) id_institution: number
  ): Promise<Boolean> {
    await Institution.delete({id_institution});
    return true;
  }
}
