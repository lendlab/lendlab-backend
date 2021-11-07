import {
  Arg,
  Int,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
} from "type-graphql";
import argon2 from "argon2";

import {User} from "../../entity/user";
import {UserInput} from "../../inputs/user/UserInput";
import {UserUpdateInput} from "../../inputs/user/UserUpdateInput";
import {UserResponse} from "../../errors/User.errors";
import {getRepository} from "typeorm";

@Resolver()
export class RegisterResolver {
  @Query(() => [User])
  async getUsers() {
    //const usersList = await User.find({relations: ["course", "institution"]});
    //return usersList;

    const user = getRepository(User)
      .createQueryBuilder("user")
      .innerJoinAndSelect("user.institution", "institution")
      .innerJoinAndSelect("user.course", "course")
      .getMany();

    return user;
  }

  @Query(() => [User])
  async getUser(@Arg("cedula", () => Int) cedula: number) {
    const user = await User.find({cedula});
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("data", () => UserInput)
    data: UserInput,
    @PubSub() pubsub: PubSubEngine
  ): Promise<UserResponse> {
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
      institution: data.institution,
      course: data.course,
    }).save();

    pubsub.publish("CREATE_USER", user);

    if (!user) {
      return {
        errors: [{field: "cedula", message: "Cedula actualmente en uso."}],
      };
    }
    if (data.password.length < 5) {
      return {
        errors: [
          {
            field: "password",
            message: "Tu contraseña debe tener mas de cinco caracteres.",
          },
        ],
      };
    }
    return {user};
  }

  @Mutation(() => User, {nullable: true})
  async updateUser(
    @Arg("cedula", () => Int) cedula: number,
    @Arg("data", () => UserUpdateInput) data: UserUpdateInput
  ) {
    await User.update({cedula}, data);
    const updatedUser = User.findOne({cedula});
    if (!updatedUser) {
      return null;
    }
    return updatedUser;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("cedula", () => Int) cedula: number): Promise<Boolean> {
    await User.delete({cedula});
    return true;
  }
}
