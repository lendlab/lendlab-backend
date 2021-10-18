import {Length} from "class-validator";
import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Column, Entity, PrimaryColumn, OneToMany} from "typeorm";
import {Belongs} from "./belongs";
import {Laboratorist} from "./laboratorist";
import {Reservation} from "./reservation";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryColumn({type: "int", unique: true})
  @Length(8, 9)
  cedula: number;

  @Field()
  @Column()
  nombre: string;

  @Column()
  password: string;

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

  @Field()
  @Column({type: "date"})
  fecha_nacimiento: String;

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservation: Promise<Reservation[]>;

  @OneToMany(() => Laboratorist, (lab) => lab.ci_laboratorist)
  laboratorist: Laboratorist;

  @OneToMany(() => Belongs, (belongs) => belongs.user)
  belongs: Promise<Belongs[]>;
}
