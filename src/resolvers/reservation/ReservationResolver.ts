import { Reservation } from "../../entity/reservation";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class UserReservationInput {
  @Field()
  cedula: number;
}

@InputType()
class MaterialReservationInput {
  @Field()
  id_material: number;
}

@InputType()
class ReservationInput {
  @Field()
  id_reserva: number;

  @Field()
  finalizada: boolean;

  @Field()
  fecha_hora: Date;

  @Field(() => UserReservationInput)
  user: UserReservationInput;

  @Field(() => MaterialReservationInput)
  material: MaterialReservationInput;
}

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
    return Reservation.create({ ...data }).save();
  }
}
