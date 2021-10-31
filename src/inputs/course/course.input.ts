import {Field, InputType} from "type-graphql";

@InputType()
class userCi {
  @Field()
  cedula: number;
}

@InputType()
class course_data {
  @Field()
  course_name: string;
}

@InputType()
export class NewCourse {
  @Field()
  course_name: string;
}

@InputType()
export class AddUserToCourse {
  @Field(() => course_data)
  course: course_data;

  @Field(() => userCi)
  user: userCi;
}
