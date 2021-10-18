import {User} from "../entity/user";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
class UserFieldErrors {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => [UserFieldErrors], {nullable: true})
  errors?: UserFieldErrors[];

  @Field(() => User, {nullable: true})
  user?: User;
}
