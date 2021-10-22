import {Institution} from "../../entity/institution";
import {Query, Resolver} from "type-graphql";

@Resolver()
export class InstitutionResolver {
  @Query(() => [Institution])
  async getInstitutions() {
    return Institution.find();
  }
}
