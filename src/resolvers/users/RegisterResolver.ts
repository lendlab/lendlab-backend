import { User } from "../../entity/user";
import { Arg, Float, Mutation, Query, Resolver } from "type-graphql";
import { UserInput } from "../../inputs/user/UserInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }
  @Mutation(() => User)
  async register(
    @Arg("data", () => UserInput)
    data: UserInput
  ): Promise<User> {
    const user = await User.create(data).save();
    return user;
  }

  //@Mutation(() =>)

  @Query(() => [User])
  async getUsers() {
    const usersList = await User.find();
    return usersList;
  }

  @Query(() => [User])
  async getUser(@Arg("cedula", () => Float) cedula: number) {
    const user = await User.find({ cedula });
    return user;
  }

  @Mutation(() => User, { nullable: true })
  async deleteUser(@Arg("cedula", () => Float) cedula: number) {
    const user = await User.delete({ cedula });
    return user;
  }
}
