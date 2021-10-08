import { Field, InputType } from "type-graphql";

@InputType()
export class ReservationInput {
  @Field()
  ci_user: number;

  @Field()
  id_reserva: number;

  @Field()
  finalidada: boolean;

  @Field()
  fecha_reserva: Date;

  @Field()
  fecha_devolucion: Date;
}
