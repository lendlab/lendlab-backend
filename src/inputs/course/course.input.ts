import {Field, InputType} from "type-graphql";

@InputType()
export class NewCourse {
  @Field()
  course_name: string;
}
