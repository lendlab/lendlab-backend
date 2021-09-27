import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Reservation } from "./reservation";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryColumn()
  cedula: number;

  @Field()
  @Column()
  nombre: string;

  @Field()
  @Column()
  pass: string;

  @Field()
  @Column()
  direccion: string;

  @Field()
  @Column()
  foto_usuario: string;

  @Field()
  @Column()
  telefono: number;

  @Field()
  @Column()
  tipo_usuario: string;

  @Field(() => String)
  @CreateDateColumn()
  fecha_nacimiento: Date;

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservation: Reservation[];
}