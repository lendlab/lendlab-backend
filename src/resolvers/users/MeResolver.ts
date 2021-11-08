import {Ctx, Query} from "type-graphql";
import {getRepository} from "typeorm";

import {User} from "../../entity/user";
import {MyContext} from "../../types/MyContext";

export class MeResolver {
  @Query(() => User, {nullable: true})
  async me(@Ctx() {req}: MyContext) {
    if (!req.session.cedula) {
      return null;
    }
    const ci = req.session.cedula;

    const user = getRepository(User)
      .createQueryBuilder("user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .where(`user.cedula = ${ci}`)
      .getOne();

    return user;
  }
}
