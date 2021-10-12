import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Reservation } from "./reservation";

@ObjectType()
@Entity()
export class Lend extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: false })
  @PrimaryColumn({ default: 1 })
  id_lend: number;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  @PrimaryColumn()
  fecha_presta: Date;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  fecha_vencimiento: Date;

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  fecha_devolucion: Date;

  @Field(() => Reservation, { nullable: true })
  @ManyToOne(() => Reservation, (reservation) => reservation.lend)
  reservation: Reservation;
}
