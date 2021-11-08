import {Field, InputType} from "type-graphql";

@InputType()
class ReservationUpdateInput {
  @Field({nullable: true})
  id_reserva: number;

  @Field(() => Date, {nullable: true})
  fecha_hora: String;
}

@InputType()
export class LendUpdateInput {
  @Field(() => String, {nullable: true})
  fecha_vencimiento: Date;

  @Field(() => String, {nullable: true})
  fecha_devolucion: Date;

  @Field(() => ReservationUpdateInput, {nullable: true})
  reservation: ReservationUpdateInput;
}
