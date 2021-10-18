import {User} from "../../entity/user";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import argon2 from "argon2";

import {UserInput} from "../../inputs/user/UserInput";
import {MyContext} from "../../types/MyContext";
import {UserResponse} from "../../errors/User.errors";

@InputType()
class CedulaPasswordInput {
  @Field()
  cedula: number;
  @Field()
  password: string;
}

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

    req.session.userId = user.cedula;
    return {user};
  }

  @Query(() => User, {nullable: true})
  async me(@Ctx() {req}: MyContext) {
    if (!req.session.userId) {
      return null;
    }

    return User.findOne(req.session.userId);
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() {req, res}: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie("qid");
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }

  @Mutation(() => User, {nullable: true})
  async deleteUser(
    @Arg("cedula", () => Int) cedula: number
  ): Promise<User | null> {
    const deletedUser = await User.delete({cedula});
    return deletedUser.raw[0];
  }
}
