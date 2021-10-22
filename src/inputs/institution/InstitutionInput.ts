import {Field, InputType} from "type-graphql";

@InputType()
export class InstitutionInput {
  @Field()
  institution_name: string;
}
