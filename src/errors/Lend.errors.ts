import {Field, ObjectType} from "type-graphql";
import {Lend} from "../entity/lend";

@ObjectType()
class LendErrors {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class LendResponse {
  @Field(() => [LendErrors], {nullable: true})
  errors?: LendErrors[];

  @Field(() => Lend, {nullable: true})
  lend?: Lend;
}
