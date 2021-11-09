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
import {getRepository} from "typeorm";

import {User} from "../../entity/user";
import {UserInput} from "../../inputs/user/UserInput";
import {UserUpdateInput} from "../../inputs/user/UserUpdateInput";
import {UserResponse} from "../../errors/User.errors";
import {Course} from "../../entity/course";

import {format} from "../../validators/index";
import {userSchema} from "../../validators/user/user.validator";

@Resolver()
export class RegisterResolver {
  @Query(() => [User])
  async getUsers() {
    const user = getRepository(User)
      .createQueryBuilder("user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .getMany();

    return user;
  }

  @Query(() => User)
  async getUser(@Arg("cedula", () => Int) cedula: number) {
    const user = getRepository(User)
      .createQueryBuilder("user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .where(`user.cedula = ${cedula} `)
      .getOne();

    return user;
  }

  @Query(() => [User])
  async getLaboratorist() {
    const laboratorists = getRepository(User)
      .createQueryBuilder("user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .where("user.tipo_usuario = :tipo", {tipo: "Laboratorista"})
      .getMany();

    return laboratorists;
  }

  @Query(() => [User])
  async getLaboratoristsByInstitution(
    @Arg("id_institution", () => Int) id_institution: number
  ) {
    const laboratorists = getRepository(User)
      .createQueryBuilder("user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .where("user.tipo_usuario = :tipo", {tipo: "Laboratorista"})
      .andWhere("institution.id_institution = :institution", {
        institution: {id_institution},
      })
      .getMany();

    return laboratorists;
  }

  @Query(() => [User])
  async getStudents() {
    const students = getRepository(User)
      .createQueryBuilder("user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .where("user.tipo_usuario = :tipo", {tipo: "Alumno"})
      .getMany();

    return students;
  }

  @Query(() => [User])
  async getStudentsByInstitution(
    @Arg("id_institution", () => Int) id_institution: number
  ) {
    const students = getRepository(User)
      .createQueryBuilder("user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .where("user.tipo_usuario = :tipo", {tipo: "Alumno"})
      .andWhere("user.course.institution.id_institution = :institution", {
        institution: {id_institution},
      })
      .getMany();

    return students;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("data", () => UserInput)
    data: UserInput,
    @PubSub() pubsub: PubSubEngine
  ): Promise<UserResponse> {
    try {
      await userSchema.validate(data, {abortEarly: false});
    } catch (error) {
      return format(error);
    }

    let user;
    const hashedPassword = await argon2.hash(data.password);

    user = await User.findOne(data.cedula);

    const course = await getRepository(Course)
      .createQueryBuilder("course")
      .where("course.course_token = :course_token", {
        course_token: data.course.course_token,
      })
      .getOne();

    if (!course) {
      return {
        errors: [
          {
            path: "course_token",
            message: "Este curso no existe",
          },
        ],
      };
    }

    if (user) {
      return {
        errors: [
          {
            path: "cedula",
            message: "cedula en uso",
          },
        ],
      };
    }

    const result = await User.create({
      cedula: data.cedula,
      nombre: data.nombre,
      password: hashedPassword,
      direccion: data.direccion,
      foto_usuario: data.foto_usuario,
      telefono: data.telefono,
      tipo_usuario: data.tipo_usuario,
      fecha_nacimiento: data.fecha_nacimiento,
      course: data.course,
    }).save();

    user = await getRepository(User)
      .createQueryBuilder("user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .where("user.cedula = :cedula", {cedula: result.cedula})
      .getOne();

    pubsub.publish("CREATE_USER", result);

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
