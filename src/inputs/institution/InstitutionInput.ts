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

@InputType()
class course_data_institutio {
  @Field()
  course_name: string;
}

@InputType()
class institution_data {
  @Field()
  id_institution: number;
}

@InputType()
export class AddCourseToInstitution {
  @Field(() => institution_data)
  institution: institution_data;

  @Field(() => course_data_institutio)
  course: course_data_institutio;
}
