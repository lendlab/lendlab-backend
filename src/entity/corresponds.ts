import {ObjectType} from "type-graphql";
import {BaseEntity, Entity, ManyToOne} from "typeorm";
import {Course} from "./course";
import {Institution} from "./institution";

@ObjectType()
@Entity()
export class Corresponds extends BaseEntity {
  @ManyToOne(() => Institution, (institution) => institution.id_institution, {
    primary: true,
  })
  institution: Institution;

  @ManyToOne(() => Course, (course) => course.id_course, {
    primary: true,
  })
  course: Course;
}
