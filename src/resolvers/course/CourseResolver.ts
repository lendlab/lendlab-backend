import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

import { NewCourse, UpdateCourse } from "../../inputs/course/course.input";
import { Course } from "../../entity/course";
import { getRepository } from "typeorm";

@Resolver()
export class CourseResolver {
  @Query(() => [Course])
  async getCourses() {
    const courses = await getRepository(Course)
      .createQueryBuilder("course")
      .innerJoinAndSelect("course.institution", "institution")
      .getMany();

    return courses;
  }

  @Query(() => Course)
  async getCourse(
    @Arg("course_token") course_token: string
  ): Promise<Course | undefined> {
    const course = await getRepository(Course)
      .createQueryBuilder("course")
      .innerJoinAndSelect("course.institution", "institution")
      .where("course.course_token = :course_token", {
        course_token: course_token,
      })
      .getOne();

    if (!course) return undefined;

    return course;
  }

  @Query(() => [Course])
  async getCoursessByInstitution(
    @Arg("id_institution", () => Int) id_institution: number
  ) {
    const material = await getRepository(Course)
      .createQueryBuilder("course")
      .innerJoinAndSelect("course.institution", "institution")
      .where("course.institution.id_institution = :institutionId", {
        institutionId: id_institution,
      })
      .getMany();

    return material;
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
    @Arg("data", () => UpdateCourse) data: UpdateCourse,
    @Arg("course_token", () => String) course_token: string
  ) {
    await Course.update({ course_token }, data);

    const course = getRepository(Course)
      .createQueryBuilder("course")
      .innerJoinAndSelect("course.institution", "institution")
      .getOne();

    if (!course) {
      return null;
    }

    return course;
  }

  @Mutation(() => Boolean)
  async deleteCourse(
    @Arg("course_token", () => String) course_token: string
  ): Promise<Boolean> {
    await Course.delete(course_token);

    return true;
  }
}
