import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Entity, ManyToOne} from "typeorm";
import {Course} from "./course";
import {Institution} from "./institution";

@ObjectType()
@Entity()
export class Corresponds extends BaseEntity {
  @Field(() => Institution)
  @ManyToOne(() => Institution, (institution) => institution.id_institution, {
    primary: true,
    onDelete: "CASCADE",
  })
  institution: Institution;

  @Field(() => Course)
  @ManyToOne(() => Course, (course) => course.course_token, {
    onDelete: "CASCADE",
  })
  course: Course;
}
