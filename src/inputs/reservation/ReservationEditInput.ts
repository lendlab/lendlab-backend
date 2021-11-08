import {Field, InputType} from "type-graphql";

@InputType()
class UserReservationEditInput {
  @Field({nullable: true})
  cedula: number;
}

@InputType()
class MaterialReservationEditInput {
  @Field({nullable: true})
  id_material: number;
}

@InputType()
export class ReservationEditInput {
  @Field({nullable: true})
  finalizada: boolean;

  @Field(() => String, {nullable: true})
  fecha_hora: Date;

  @Field(() => UserReservationEditInput, {nullable: true})
  user: UserReservationEditInput;

  @Field(() => MaterialReservationEditInput, {nullable: true})
  material: MaterialReservationEditInput;
}
