import {Field, ObjectType} from "type-graphql";
import {BaseEntity, CreateDateColumn, Entity, ManyToOne} from "typeorm";
import {Room} from "./room";
import {User} from "./user";

@ObjectType()
@Entity()
export class Occupies extends BaseEntity {
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.ocuppies, {
    onDelete: "CASCADE",
    primary: true,
  })
  user: User;

  @Field(() => Room)
  @ManyToOne(() => Room, {onDelete: "CASCADE", primary: true})
  room: Room;

  @Field(() => String)
  @CreateDateColumn()
  fecha_hora_inicio: Date;

  @Field(() => String)
  @CreateDateColumn()
  fecha_hora_fin: Date;
}
