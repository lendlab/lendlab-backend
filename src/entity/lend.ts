import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Material } from "./material";
import { Reservation } from "./reservation";

@ObjectType()
@Entity()
export class Lend extends BaseEntity {
  @Field({ nullable: false })
  @Column({ default: 1 })
  id_lend: number;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  @PrimaryColumn()
  fecha_presta: Date;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  fecha_vencimiento: Date;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  fecha_devolucion: Date;

  @Field(() => Reservation, { nullable: true })
  @ManyToOne(() => Reservation, (reservation) => reservation.lend)
  reservation: Reservation;

  @Field(() => Material)
  @ManyToOne(() => Material, (material) => material.lend)
  material: Material;
}
