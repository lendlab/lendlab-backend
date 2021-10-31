import {Arg, Mutation, Query, Resolver} from "type-graphql";

import {AddUserToCourse, NewCourse} from "../../inputs/course/course.input";
import {Course} from "../../entity/course";
import {Belongs} from "../../entity/belongs";

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

  @Query(() => [Belongs])
  async getUserCourse() {
    return Belongs.find({relations: ["user", "course"]});
  }

  @Mutation(() => Belongs)
  async addUserToCourse(@Arg("data") data: AddUserToCourse) {
    await Belongs.create({...data}).save();
  }
}
