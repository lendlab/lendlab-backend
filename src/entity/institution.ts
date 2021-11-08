import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Course} from "./course";
import {Lend} from "./lend";
import {Material} from "./material";
import {Reservation} from "./reservation";
import {Room} from "./room";

@ObjectType()
@Entity()
export class Institution extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id_institution: number;

  @Field()
  @Column({unique: true})
  institution_name: string;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  phone: number;

  @OneToMany(() => Material, (material) => material.institution)
  material: Promise<Material[]>;

  @OneToMany(() => Room, (room) => room.institution)
  room: Promise<Room>;

  @OneToMany(() => Reservation, (reservation) => reservation.institution)
  reservation: Promise<Reservation>;

  @OneToMany(() => Lend, (lend) => lend.institution)
  lend: Promise<Lend>;

  @OneToMany(() => Course, (course) => course.institution, {
    onDelete: "CASCADE",
  })
  course: Promise<Course>;
}
