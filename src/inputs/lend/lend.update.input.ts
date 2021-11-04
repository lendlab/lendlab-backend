import {Field, InputType} from "type-graphql";

@InputType()
class ReservationUpdateInput {
  @Field()
  id_reserva: number;

  @Field(() => Date)
  fecha_hora: String;
}

@InputType()
export class LendUpdateInput {
  @Field(() => String, {nullable: true})
  fecha_hora_presta: Date;

  @Field(() => String, {nullable: true})
  fecha_vencimiento: Date;

  @Field(() => String, {nullable: true})
  fecha_devolucion: Date;

  @Field(() => ReservationUpdateInput, {nullable: true})
  reservation: ReservationUpdateInput;
}
