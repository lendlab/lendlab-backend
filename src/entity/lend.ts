import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Reservation } from "./reservation";

@ObjectType()
@Entity()
export class Lend extends BaseEntity {
  @Field({ nullable: false })
  @PrimaryColumn({ default: 1 })
  id_lend: number;

  //  necesito añadir una llave foranea desde la hora para
  // poder acceder a los datos del usuario y el material ¿?

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  @PrimaryColumn()
  fecha_hora_presta: Date;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  fecha_vencimiento: Date;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  fecha_devolucion: Date;

  @Field(() => Reservation, { nullable: true })
  @ManyToOne(() => Reservation, (reservation) => reservation.lend, {
    onDelete: "CASCADE",
  })
  reservation: Reservation;
}
