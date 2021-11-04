import {Arg, Mutation, Query, Resolver} from "type-graphql";

import {NewCourse} from "../../inputs/course/course.input";
import {Course} from "../../entity/course";

@Resolver()
export class CourseResolver {
  @Query(() => [Course])
  async getCourses() {
    return Course.find();
  }

  @Mutation(() => Course)
  async createNewCourse(@Arg("data") data: NewCourse): Promise<Course> {
    const newCourse = await Course.create({...data}).save();

    return newCourse;
  }
}
