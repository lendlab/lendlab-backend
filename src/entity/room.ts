import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Institution} from "./institution";

@ObjectType()
@Entity()
export class Room extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id_room: number;

  @Field(() => Boolean)
  @Column()
  TV: boolean;

  @Field()
  @Column()
  room_number: number;

  @Field()
  @Column()
  numberOfCharis: number;

  @Field()
  @Column()
  state: string;

  @Field(() => Institution)
  @ManyToOne(() => Institution, (institution) => institution.room)
  institution: Institution;
}
