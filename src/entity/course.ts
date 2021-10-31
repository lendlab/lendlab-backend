import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Belongs} from "./belongs";

@ObjectType()
@Entity()
export class Course extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn({unique: true})
  course_name: string;

  @OneToMany(() => Belongs, (belongs) => belongs.course)
  belongs: Promise<Belongs[]>;
}
