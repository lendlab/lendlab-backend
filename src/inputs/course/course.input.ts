import {Field, InputType} from "type-graphql";

@InputType()
export class CourseInput {
  @Field()
  id_course: number;

  @Field()
  course_name: string;
}
