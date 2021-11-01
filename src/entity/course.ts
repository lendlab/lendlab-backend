import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Corresponds} from "./corresponds";
import {User} from "./user";

@ObjectType()
@Entity()
export class Course extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  course_id: number;

  @Field(() => String)
  @Column({unique: true})
  course_name: string;

  @OneToMany(() => Corresponds, (corresponds) => corresponds.course)
  corresponds: Promise<Corresponds[]>;

  @OneToMany(() => User, (user) => user.course)
  user: Promise<User[]>;
}
