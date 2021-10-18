import {Field, InputType} from "type-graphql";

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
export class ReservationInput {
  @Field()
  id_reserva: number;

  @Field()
  finalizada: boolean;

  @Field(() => Date, {nullable: true})
  fecha_hora: Date;

  @Field(() => UserReservationInput)
  user: UserReservationInput;

  @Field(() => MaterialReservationInput)
  material: MaterialReservationInput;
}
