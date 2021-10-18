import {Reservation} from "../../entity/reservation";
import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {ReservationInput} from "../../inputs/reservation/ReservationInput";
import {ReservationEditInput} from "../../inputs/reservation/ReservationEditInput";

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

  @Mutation(() => Reservation)
  async createReservation(
    @Arg("data", () => ReservationInput) data: ReservationInput
  ) {
    return Reservation.create({...data}).save();
  }

  @Mutation(() => Reservation)
  async editReservation(
    @Arg("data", () => ReservationEditInput) data: ReservationInput
  ) {
    return Reservation.create({...data}).save();
  }
}
