import {User} from "../../entity/user";
import {Arg, Int, Mutation, Query, Resolver} from "type-graphql";
import argon2 from "argon2";

import {UserInput} from "../../inputs/user/UserInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }

  @Query(() => [User])
  async getUsers() {
    const usersList = await User.find();
    return usersList;
  }

  @Query(() => [User])
  async getUser(@Arg("cedula", () => Int) cedula: number) {
    const user = await User.find({cedula});
    return user;
  }

  @Mutation(() => User)
  async register(
    @Arg("data", () => UserInput)
    data: UserInput
  ): Promise<User> {
    const hashedPassword = await argon2.hash(data.password);

    const user = await User.create({
      cedula: data.cedula,
      nombre: data.nombre,
      password: hashedPassword,
      direccion: data.direccion,
      foto_usuario: data.foto_usuario,
      telefono: data.telefono,
      tipo_usuario: data.tipo_usuario,
      fecha_nacimiento: data.fecha_nacimiento,
    }).save();
    return user;
  }

  @Mutation(() => User, {nullable: true})
  async deleteUser(
    @Arg("cedula", () => Int) cedula: number
  ): Promise<User | null> {
    const deletedUser = await User.delete({cedula});
    return deletedUser.raw[0];
  }
}
