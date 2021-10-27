import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Column, Entity, ManyToOne, OneToMany} from "typeorm";
import {Lend} from "./lend";
import {User} from "./user";

enum Turns {
  vespertino = "vespertino",
  matutino = "matutino",
}

@ObjectType()
@Entity()
export class Laboratorist extends BaseEntity {
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.laboratorist, {
    onDelete: "CASCADE",
    primary: true,
  })
  ci_laboratorist: User;

  @Field(() => Lend)
  @OneToMany(() => Lend, (lend) => lend.laboratorist)
  lend: Promise<Lend[]>;

  @Field()
  @Column({type: "enum", enum: Turns})
  turn: Turns;
}
