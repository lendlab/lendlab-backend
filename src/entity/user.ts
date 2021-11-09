import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import {Course} from "./course";
import {Lend} from "./lend";
import {Occupies} from "./occupies";
import {Reservation} from "./reservation";

enum userType {
  laboratorista = "Laboratorista",
  alumno = "Alumno",
  director = "Director",
  admin = "Admin",
}

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryColumn({unique: true})
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
  @Column({enum: userType, type: "enum"})
  tipo_usuario: string;

  @Field()
  @Column({type: "date"})
  fecha_nacimiento: String;

  @Field(() => Course)
  @ManyToOne(() => Course, (course) => course.user,{onDelete:"CASCADE"})
  course: Course;

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservation: Promise<Reservation[]>;

  @OneToMany(() => Lend, (lend) => lend.laboratorist)
  lend: Promise<Lend>;

  @OneToMany(() => Occupies, (occupies) => occupies.room)
  ocuppies: Promise<Occupies>;
}
