import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Corresponds} from "./corresponds";
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

  @OneToMany(() => Corresponds, (corresponds) => corresponds.course)
  corresponds: Promise<Corresponds[]>;

  @OneToMany(() => User, (user) => user.course)
  user: Promise<User[]>;
}
