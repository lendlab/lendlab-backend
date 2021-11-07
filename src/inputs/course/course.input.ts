import {Field, InputType} from "type-graphql";

@InputType()
export class NewCourse {
  @Field()
  course_name: string;

  @Field(() => String)
  course_token: string;
}

@InputType()
export class UpdateCourse {
  @Field({nullable: true})
  course_name: string;
}
