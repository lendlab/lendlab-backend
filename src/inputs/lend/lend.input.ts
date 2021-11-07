import {Field, InputType} from "type-graphql";

@InputType()
class lendInstitution {
  @Field()
  id_institution: number;
}

@InputType()
class Laboratorist {
  @Field()
  cedula: number;
}

@InputType()
class ReservationInputa {
  @Field()
  id_reserva: number;

  @Field(() => Date)
  fecha_hora: String;
}

@InputType()
class LendUser {
  @Field()
  cedula: number;
}

@InputType()
export class LendInput {
  @Field(() => String, {nullable: true})
  fecha_hora_presta: Date;

  @Field(() => String, {nullable: true})
  fecha_vencimiento: Date;

  @Field(() => String, {nullable: true})
  fecha_devolucion: Date;

  @Field(() => ReservationInputa)
  reservation: ReservationInputa;

  @Field(() => LendUser)
  user: LendUser;

  @Field(() => Laboratorist)
  laboratorist: Laboratorist;

  @Field(() => lendInstitution)
  institution: lendInstitution;
}
