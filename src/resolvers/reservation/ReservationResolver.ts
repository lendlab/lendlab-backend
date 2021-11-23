import { createQueryBuilder, getRepository } from "typeorm";

import { Reservation } from "../../entity/reservation";
import {
  Arg,
  Ctx,
  Int,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
} from "type-graphql";
import {
  ReservationInput,
  ReservationSessionInput,
} from "../../inputs/reservation/ReservationInput";
import { ReservationEditInput } from "../../inputs/reservation/ReservationEditInput";
import { MyContext } from "../../types/MyContext";
import { ReservationResponse } from "../../errors/Reservation.errors";

@Resolver()
export class ReservationResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }

  @Query(() => [Reservation])
  async getReservations() {
    //const reservations = await Reservation.find({
    //  relations: ["user", "material"],
    //});
    // return reservations;

    const rs = getRepository(Reservation)
      .createQueryBuilder("reservation")
      .innerJoinAndSelect("reservation.material", "material")
      .innerJoinAndSelect("reservation.user", "user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .orderBy("reservation.fecha_hora", "DESC")
      .getMany();

    return rs;
  }

  @Query(() => [Reservation])
  async getReservationsByInstitution(
    @Arg("id_institution", () => Int) id_institution: number
  ) {
    const reservations = await getRepository(Reservation)
      .createQueryBuilder("reservation")
      .innerJoinAndSelect("reservation.institution", "reservationInstitution")
      .innerJoinAndSelect("reservation.material", "material")
      .innerJoinAndSelect("reservation.user", "user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .where(`reservationInstitution.id_institution = ${id_institution}`)
      .orderBy("reservation.fecha_hora", "DESC")
      .getMany();

    // SELECT * from lend JOIN reservation on lend.reservationIdReserva = reservation.id_reserva JOIN user ON user.cedula = reservation.userCedula
    return reservations;
  }

  @Query(() => [Reservation])
  async getUserReservations(@Arg("cedula", () => Int) cedula: number) {
    const reservations = await getRepository(Reservation)
      .createQueryBuilder("reservation")
      .innerJoinAndSelect("reservation.institution", "reservationInstitution")
      .innerJoinAndSelect("reservation.material", "material")
      .innerJoinAndSelect("reservation.user", "user")
      .innerJoinAndSelect("user.course", "course")
      .innerJoinAndSelect("course.institution", "institution")
      .where("reservation.user.cedula = :cedula", { cedula: cedula })
      .orderBy("reservation.fecha_hora", "DESC")
      .getMany();

    // SELECT * from lend JOIN reservation on lend.reservationIdReserva = reservation.id_reserva JOIN user ON user.cedula = reservation.userCedula
    return reservations;
  }

  @Query(() => Int)
  async getMaxId() {
    const { max } = await createQueryBuilder("reservation")
      .select("MAX(id_reserva)", "max")
      .getRawOne();

    if (!max) {
      return 0;
    }

    return max;
  }

  @Query(() => Int)
  async getReservationsCount(
    @Arg("id_institution", () => Int) id_institution: number
  ) {
    const { count } = await createQueryBuilder("reservation")
      .select("COUNT(distinct id_reserva)", "count")
      .where(`reservation.id_institution = ${id_institution}`)
      .getRawOne();

    return count;
  }

  @Mutation(() => ReservationResponse, { nullable: false })
  async createReservation(
    @Arg("data", () => ReservationInput) data: ReservationInput,
    @PubSub() pubsub: PubSubEngine
  ): Promise<ReservationResponse> {
    const reservation = await Reservation.create({ ...data }).save();
    pubsub.publish("CREATE_RESERVATION", reservation);

    if (!reservation) {
      return {
        errors: [{ field: "a", message: "a" }],
      };
    }
    return { reservation };
  }

  //Reserva usando sessiones

  @Mutation(() => Reservation)
  async createReservationUserSession(
    @Arg("data", () => ReservationSessionInput) data: ReservationSessionInput,
    @Ctx() { req }: MyContext
  ): Promise<Reservation> {
    const ci = req.session.cedula;
    console.log(ci);
    const reservationSession = await Reservation.create({ ...data }).save();
    return reservationSession;
  }

  @Mutation(() => [Reservation], { nullable: true })
  async updateReservation(
    @Arg("id_reserva", () => Int) id_reserva: number,
    @Arg("data", () => ReservationEditInput)
    data: ReservationEditInput
  ) {
    await Reservation.update({ id_reserva }, data);
    const updatedReservations = await Reservation.find({
      id_reserva,
    });
    return updatedReservations;
  }

  @Mutation(() => Boolean, { nullable: true })
  async deleteReservation(
    @Arg("id_reserva", () => Int) id_reserva: number
  ): Promise<Boolean> {
    await Reservation.delete({ id_reserva });
    return true;
  }
}
