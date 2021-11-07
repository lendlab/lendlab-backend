import {Field, ObjectType} from "type-graphql";

import {Material} from "../entity/material";

@ObjectType()
class MaterialErrors {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class ReservationResponse {
  @Field(() => [MaterialErrors], {nullable: true})
  errors: MaterialErrors[];

  @Field(() => Material, {nullable: true})
  material?: Material;
}
