import {Field, InputType} from "type-graphql";

@InputType()
class Reservation_Institution {
  @Field()
  id_institution: number;
}

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

  @Field(() => Reservation_Institution)
  institution: Reservation_Institution;
}

@InputType()
class UserReservationSessionInput {
  @Field()
  cedula: number;
}

@InputType()
class MaterialReservationSessionInput {
  @Field()
  id_material: number;
}

@InputType()
export class ReservationSessionInput {
  @Field()
  id_reserva: number;

  @Field()
  finalizada: boolean;

  @Field(() => Date, {nullable: true})
  fecha_hora: Date;

  @Field(() => UserReservationSessionInput, {nullable: true})
  user: UserReservationSessionInput;

  @Field(() => MaterialReservationSessionInput)
  material: MaterialReservationSessionInput;
}
