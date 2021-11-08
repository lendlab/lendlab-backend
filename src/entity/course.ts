import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import {Institution} from "./institution";
import {User} from "./user";
@ObjectType()
@Entity()
export class Course extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn({unique: true})
  course_token: string;

  @Field(() => String)
  @Column({unique: true})
  course_name: string;

  @Field(() => Institution)
  @ManyToOne(() => Institution, (institution) => institution.course, {
    onDelete: "CASCADE",
  })
  institution: Institution;

  @OneToMany(() => User, (user) => user.course)
  user: Promise<User[]>;
}
