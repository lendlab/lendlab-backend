import {Field, InputType} from "type-graphql";

@InputType()
class course_institution {
  @Field()
  id_institution: number;
}

@InputType()
export class NewCourse {
  @Field()
  course_name: string;

  @Field(() => String)
  course_token: string;

  @Field(() => course_institution)
  institution: course_institution;
}

@InputType()
export class UpdateCourse {
  @Field({nullable: true})
  course_name: string;
}
