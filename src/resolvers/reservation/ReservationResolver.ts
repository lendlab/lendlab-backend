import {Reservation} from "../../entity/reservation";
import {Arg, Int, Mutation, Query, Resolver} from "type-graphql";
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
    return await Reservation.create({...data}).save();
  }

  @Mutation(() => [Reservation], { nullable: true })
  async updateReservation(
    @Arg("id_reserva", () => Int) id_reserva: number,
    @Arg("data", () => ReservationEditInput)
    data: ReservationEditInput
  ) {
    await Reservation.update({ id_reserva }, data);
    const updatedReservations = await Reservation.find({
      id_reserva
    });

    return updatedReservations;
  }


  @Mutation(() => Boolean, {nullable: true})
  async deleteReservation(
    @Arg("id_reserva", () => Int) id_reserva: number,
  ): Promise<Boolean> {
    await Reservation.delete({id_reserva});
    return true;
  }
}