import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Entity, ManyToOne} from "typeorm";
import {Course} from "./course";
import {Institution} from "./institution";

@ObjectType()
@Entity()
export class Corresponds extends BaseEntity {
  @Field()
  @ManyToOne(() => Institution, (institution) => institution.id_institution, {
    primary: true,
  })
  institution: Institution;

  @Field()
  @ManyToOne(() => Course, (course) => course.course_name, {
    primary: true,
  })
  course: Course;
}
