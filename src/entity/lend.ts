import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Reservation} from "./reservation";
import {User} from "./user";

@ObjectType()
@Entity()
export class Lend extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id_lend: number;

  @Field(() => String, {nullable: true})
  @PrimaryColumn({default: () => "now()", type: "timestamp"})
  fecha_hora_presta: Date;

  @Field(() => String, {nullable: true})
  @CreateDateColumn()
  fecha_vencimiento: Date;

  @Field(() => String, {nullable: true})
  @Column({nullable: true})
  fecha_devolucion: Date;

  @Field(() => Reservation, {nullable: true})
  @ManyToOne(() => Reservation, (reservation) => reservation.lend, {
    onDelete: "CASCADE",
  })
  reservation: Reservation;

  @Field(() => User, {nullable: true})
  @ManyToOne(() => User, {onDelete: "CASCADE", nullable: true})
  laboratorist: User;
}
