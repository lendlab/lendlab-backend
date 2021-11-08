import {Field, InputType} from "type-graphql";

@InputType()
export class InstitutionInput {
  @Field()
  institution_name: string;

  @Field()
  city: string;

  @Field()
  type: string;

  @Field()
  phone: number;
}

@InputType()
export class InstitutionUpdateInput {
  @Field({nullable: true})
  institution_name: string;

  @Field({nullable: true})
  city: string;

  @Field({nullable: true})
  type: string;

  @Field({nullable: true})
  phone: number;
}
