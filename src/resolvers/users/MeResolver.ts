import {Ctx, Query} from "type-graphql";

import {User} from "../../entity/user";
import {MyContext} from "../../types/MyContext";

export class MeResolver {
  @Query(() => User, {nullable: true})
  async me(@Ctx() {req}: MyContext) {
    if (!req.session.cedula) {
      return null;
    }

    return User.findOne(req.session.cedula);
  }
}
