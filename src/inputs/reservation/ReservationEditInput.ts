import {Field, InputType} from "type-graphql";

@InputType()
class UserReservationEditInput {
  @Field()
  cedula: number;
}

@InputType()
class MaterialReservationEditInput {
  @Field({nullable: true})
  id_material: number;
}

@InputType()
export class ReservationEditInput {
  @Field()
  id_reserva: number;

  @Field({nullable: true})
  finalizada: boolean;

  @Field(() => Date, {nullable: true})
  fecha_hora: Date;

  @Field(() => UserReservationEditInput)
  user: UserReservationEditInput;

  @Field(() => MaterialReservationEditInput)
  material: MaterialReservationEditInput;
}
