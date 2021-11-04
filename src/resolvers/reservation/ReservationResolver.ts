import {Reservation} from "../../entity/reservation";
import {
  Arg,
  Ctx,
  Int,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
  Root,
  Subscription,
} from "type-graphql";
import {
  ReservationInput,
  ReservationSessionInput,
} from "../../inputs/reservation/ReservationInput";
import {ReservationEditInput} from "../../inputs/reservation/ReservationEditInput";
import {MyContext} from "src/types/MyContext";
import {createQueryBuilder} from "typeorm";

@Resolver()
export class ReservationResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }

  @Query(() => [Reservation])
  async getReservations() {
    const reservations = await Reservation.find({
      relations: ["user", "material"],
    });
    return reservations;
  }

  @Query(() => Int)
  async getMaxId() {
    const {max} = await createQueryBuilder("reservation")
      .select("MAX(id_reserva)", "max")
      .getRawOne();

    return max;
  }

  @Query(() => Int)
  async getReservationsCount() {
    const {count} = await createQueryBuilder("reservation")
      .select("COUNT(distinct id_reserva)", "count")
      .getRawOne();

    return count;
  }

  // change this newReservationSubscription(@Root() payload: Reservation): Reservation {

  @Subscription({topics: "CREATE_RESERVATION"})
  newReservationSubscription(@Root() payload: ReservationInput): ReservationInput {
    return payload;
  }

  @Mutation(() => Reservation)
  async createReservation(
    @Arg("data", () => ReservationInput) data: ReservationInput,
    @PubSub() pubsub: PubSubEngine
  ) {
    const reservation = await Reservation.create({...data}).save();
    pubsub.publish("CREATE_RESERVATION", reservation);
    return reservation;
  }

  //Reserva usando sessiones

  @Mutation(() => Reservation)
  async createReservationUserSession(
    @Arg("data", () => ReservationSessionInput) data: ReservationSessionInput,
    @Ctx() {req}: MyContext
  ): Promise<Reservation> {
    const ci = req.session.cedula;
    console.log(ci);
    const reservationSession = await Reservation.create({
      ...data,
    }).save();
    return reservationSession;
  }

  @Mutation(() => [Reservation], {nullable: true})
  async updateReservation(
    @Arg("id_reserva", () => Int) id_reserva: number,
    @Arg("data", () => ReservationEditInput)
    data: ReservationEditInput
  ) {
    await Reservation.update({id_reserva}, data);
    const updatedReservations = await Reservation.find({
      id_reserva,
    });
    return updatedReservations;
  }

  @Mutation(() => Boolean, {nullable: true})
  async deleteReservation(
    @Arg("id_reserva", () => Int) id_reserva: number
  ): Promise<Boolean> {
    await Reservation.delete({id_reserva});
    return true;
  }
}
