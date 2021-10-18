import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Belongs} from "./belongs";

@ObjectType()
@Entity()
export class Course extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id_course: number;

  @Field(() => String)
  @Column()
  course_name: string;

  @OneToMany(() => Belongs, (belongs) => belongs.course)
  belongs: Promise<Belongs[]>;
}
