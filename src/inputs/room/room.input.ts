import {Field, InputType} from "type-graphql";

@InputType()
class RoomInstitution {
  @Field()
  id_institution: number;
}

@InputType()
export class RoomInput {
  @Field(() => Boolean)
  TV: boolean;

  @Field()
  room_number: number;

  @Field()
  numberOfCharis: number;

  @Field()
  state: string;

  @Field(() => RoomInstitution)
  institution: RoomInstitution;
}
