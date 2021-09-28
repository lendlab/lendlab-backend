import { User } from "../../entity/user";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
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
  async getUser(@Arg("cedula", () => Int) cedula: number) {
    const user = await User.find({ cedula });
    return user;
  }

  @Mutation(() => User, { nullable: true })
  async deleteUser(@Arg("cedula", () => Int) cedula: number): Promise<User | null> {
    const deletedUser = await User.delete({ cedula });
    return deletedUser.raw[0];
  }
}
