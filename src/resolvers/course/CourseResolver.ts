import {Arg, Mutation, Query, Resolver} from "type-graphql";

import {NewCourse, UpdateCourse} from "../../inputs/course/course.input";
import {Course} from "../../entity/course";

@Resolver()
export class CourseResolver {
  @Query(() => [Course])
  async getCourses() {
    return Course.find();
  }

  @Mutation(() => Course)
  async createNewCourse(@Arg("data") data: NewCourse): Promise<Course> {
    //function to generate a random string
    const genToken = (lenght: number) => {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charLenght = characters.length;
      for (let i = 0; i < lenght; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLenght));
      }
      return result;
    };
    //setting up token into course variable
    const token = data.course_token + genToken(10);

    const course = await Course.create({
      course_name: data.course_name,
      course_token: token,
      institution: data.institution,
    }).save();

    return course;
  }

  @Mutation(() => Course)
  async updateCourse(
    @Arg("course_token", () => String) course_token: string,
    @Arg("course_name", () => UpdateCourse) course_name: UpdateCourse
  ) {
    await Course.update({course_token}, course_name);

    const updatedCourse = Course.findOne(course_token);

    if (!updatedCourse) {
      return null;
    }

    return updatedCourse;
  }

  @Mutation(() => Boolean)
  async deleteCourse(
    @Arg("course_token", () => String) course_token: string
  ): Promise<Boolean> {
    await Course.delete(course_token);

    return true;
  }
}
