import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Lend } from "./lend";
import { Material } from "./material";
import { User } from "./user";

@ObjectType()
@Entity()
export class Reservation extends BaseEntity {
  @Field()
  @PrimaryColumn({ default: 1 })
  id_reserva: number;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  @PrimaryColumn({default: () => "CURRENT_TIMESTAMP(6)", type: "timestamp"})
  fecha_hora: Date;

  @Column({ type: "boolean" })
  @Field(() => Boolean)
  finalizada: boolean;

  @OneToMany(() => Lend, (lend) => lend.reservation)
  lend: Promise<Lend[]>;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.reservation)
  user: User;

  @Field(() => Material, { nullable: true })
  @ManyToOne(() => Material, (material) => material.reservation)
  material: Material;
}
