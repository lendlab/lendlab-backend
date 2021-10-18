import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Entity, ManyToOne} from "typeorm";
import {Institution} from "./institution";
import {Room} from "./room";

@ObjectType()
@Entity()
export class Occupies extends BaseEntity {
  @Field()
  @ManyToOne(() => Institution, {onDelete: "CASCADE", primary: true})
  institution: Institution;

  @ManyToOne(() => Room, {onDelete: "CASCADE", primary: true})
  room: Room;
}
