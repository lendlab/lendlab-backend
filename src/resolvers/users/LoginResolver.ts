import {Arg, Ctx, Field, InputType, Mutation} from "type-graphql";
import argon2 from "argon2";

import {UserResponse} from "../../errors/User.errors";
import {MyContext} from "../../types/MyContext";
import {User} from "../../entity/user";

@InputType()
class CedulaPasswordInput {
  @Field()
  cedula: number;
  @Field()
  password: string;
}

export class LoginResolver {
  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: CedulaPasswordInput,
    @Ctx() {req}: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({cedula: options.cedula});

    if (!user) {
      return {
        errors: [{field: "cedula", message: "this cedula doesn't exists"}],
      };
    }

    const valid = await argon2.verify(user.password, options.password);

    if (!valid) {
      return {
        errors: [{field: "password", message: "that password doesn't exists"}],
      };
    }

    console.log(user);

    req.session.cedula = user.cedula;
    return {user};
  }
}
