import {Field, ObjectType} from "type-graphql";

import {Reservation} from "../entity/reservation";

@ObjectType()
class ReservationErrors {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class ReservationResponse {
  @Field(() => [ReservationErrors], {nullable: true})
  errors?: ReservationErrors[];

  @Field(() => Reservation, {nullable: true})
  reservation?: Reservation;
}
