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
import {Institution} from "./institution";
import {Laboratorist} from "./laboratorist";
import {Reservation} from "./reservation";

enum userType {
  laboratorista = "Laboratorista",
  alumno = "Alumno",
  director = "Director",
  admin = "Admin"
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

  @Field(() => Institution)
  @ManyToOne(() => Institution, (institution) => institution.user)
  institution: Institution;

  @Field(() => Course)
  @ManyToOne(() => Course, (course) => course.user)
  course: Course;

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservation: Promise<Reservation[]>;

  @OneToMany(() => Laboratorist, (lab) => lab.ci_laboratorist)
  laboratorist: Laboratorist;
}
