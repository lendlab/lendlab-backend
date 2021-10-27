import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Entity, ManyToOne} from "typeorm";
import {Course} from "./course";
import {User} from "./user";

@ObjectType()
@Entity()
export class Belongs extends BaseEntity {
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.belongs, {
    onDelete: "CASCADE",
    primary: true,
  })
  user: User;

  @Field(() => Course)
  @ManyToOne(() => Course, (course) => course.belongs, {
    onDelete: "CASCADE",
    primary: true,
  })
  course: Course;
}
