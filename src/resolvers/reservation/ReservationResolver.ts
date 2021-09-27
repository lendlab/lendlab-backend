import { Reservation } from "../../entity/reservation";
import { Query, Resolver } from "type-graphql";
import { Lend } from "../../entity/lend";

@Resolver()
export class ReservationResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }
  @Query(() => [Reservation])
  async getReservations() {
    const reservations = await Reservation.find({
      relations: ["user", "material", "lend"],
    });
    return reservations;
  }

  @Query(() => [Lend])
  async lend() {
    const lend = await Lend.find({
      relations: ["reservation", "material"],
    });
    console.log(lend);
    return lend;
  }

  //@Mutation(() => Reservation)
  //async createReservation(
  //  @Arg("data", () => ReservationInput) data: ReservationInput
  //): Promise<Reservation> {
  //  return Lend.create();
  //}
}
