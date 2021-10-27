import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
  roomNumber: number;

  @Field()
  @Column()
  numberOfCharis: number;

  @Field()
  @Column()
  state: string;
}
