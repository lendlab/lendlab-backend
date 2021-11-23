import {
  Arg,
  Int,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
} from "type-graphql";
import { createQueryBuilder, getRepository } from "typeorm";
import { Lend } from "../../entity/lend";
import { LendInput } from "../../inputs/lend/lend.input";
import { LendUpdateInput } from "../../inputs/lend/lend.update.input";

@Resolver()
export class LendResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }

  @Query(() => [Lend])
  async getLends() {
    const lend = await getRepository(Lend)
      .createQueryBuilder("lend")
      .innerJoinAndSelect("lend.reservation", "reservation")
      .innerJoinAndSelect("lend.institution", "institution")
      .innerJoinAndSelect("reservation.material", "material")
      .innerJoinAndSelect("reservation.user", "user")
      .innerJoinAndSelect("lend.laboratorist", "laboratorist")
      .where("lend.laboratoristCedula")
      .orderBy("lend.fecha_hora_presta", "DESC")
      .getMany();

    // SELECT * from lend JOIN reservation on lend.reservationIdReserva = reservation.id_reserva JOIN user ON user.cedula = reservation.userCedula
    return lend;
  }

  @Query(() => [Lend])
  async getLendsByInstitution(
    @Arg("id_institution", () => Int) id_institution: number
  ) {
    const lends = await getRepository(Lend)
      .createQueryBuilder("lend")
      .innerJoinAndSelect("lend.reservation", "reservation")
      .innerJoinAndSelect("lend.institution", "institution")
      .innerJoinAndSelect("reservation.material", "material")
      .innerJoinAndSelect("reservation.user", "user")
      .innerJoinAndSelect("lend.laboratorist", "laboratorist")
      .where("lend.institution.id_institution = :institutionId", {
        institutionId: id_institution,
      })
      .orderBy("lend.fecha_hora_presta", "DESC")
      .getMany();

    // SELECT * from lend JOIN reservation on lend.reservationIdReserva = reservation.id_reserva JOIN user ON user.cedula = reservation.userCedula
    return lends;
  }

  @Query(() => [Lend])
  async getUserLends(@Arg("cedula", () => Int) cedula: number) {
    const lends = await getRepository(Lend)
      .createQueryBuilder("lend")
      .innerJoinAndSelect("lend.reservation", "reservation")
      .innerJoinAndSelect("lend.institution", "institution")
      .innerJoinAndSelect("reservation.material", "material")
      .innerJoinAndSelect("reservation.user", "user")
      .innerJoinAndSelect("lend.laboratorist", "laboratorist")
      .where("reservation.user.cedula = :cedula", { cedula: cedula })
      .orderBy("lend.fecha_hora_presta", "DESC")
      .getMany();

    // SELECT * from lend JOIN reservation on lend.reservationIdReserva = reservation.id_reserva JOIN user ON user.cedula = reservation.userCedula
    return lends;
  }

  @Query(() => Int)
  async getLendsCount(
    @Arg("id_institution", () => Int) id_institution: number
  ) {
    const { count } = await getRepository(Lend);
    createQueryBuilder("lend")
      .select("COUNT(*)", "count")
      .where("lend.institution.id_institution = :institutionId", {
        institutionId: id_institution,
      })
      .getRawOne();

    return count;
  }

  @Mutation(() => Lend)
  async createLend(
    @Arg("data", () => LendInput) data: LendInput,
    @PubSub() pubsub: PubSubEngine
  ): Promise<Lend> {
    const lend = await Lend.create({ ...data }).save();
    pubsub.publish("CREATE_LEND", lend);

    return lend;
  }

  @Mutation(() => Lend, { nullable: true })
  async updateLend(
    @Arg("id_lend", () => Int) id_lend: number,
    @Arg("fecha_hora_presta", () => String) fecha_hora_presta: Date,
    @Arg("data", () => LendUpdateInput) data: LendUpdateInput
  ) {
    await getRepository(Lend)
      .createQueryBuilder("lend")
      .update(Lend)
      .set({ ...data })
      .where("lend.id_lend = :id", { id: id_lend })
      .andWhere("lend.fecha_hora_presta = :fecha_hora", {
        fecha_hora: fecha_hora_presta,
      })
      .execute();

    const lend = await getRepository(Lend)
      .createQueryBuilder("lend")
      .innerJoinAndSelect("lend.reservation", "reservation")
      .innerJoinAndSelect("lend.institution", "institution")
      .innerJoinAndSelect("reservation.material", "material")
      .innerJoinAndSelect("reservation.user", "user")
      .innerJoinAndSelect("lend.laboratorist", "laboratorist")
      .where("lend.id_lend = :id", { id: id_lend })
      .andWhere("lend.fecha_hora_presta = :fecha_hora", {
        fecha_hora: fecha_hora_presta,
      })
      .getOne();

    if (!lend) {
      return null;
    }

    return lend;
  }

  @Mutation(() => Boolean)
  async deleteLend(
    @Arg("id_lend", () => Int) id_lend: number,
    @Arg("fecha_hora_presta", () => String) fecha_hora_presta: string
  ): Promise<Boolean> {
    await Lend.delete({ id_lend, fecha_hora_presta });
    return true;
  }
}
