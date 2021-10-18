import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import {Lend} from "./lend";
import {Material} from "./material";
import {User} from "./user";

@ObjectType()
@Entity()
export class Reservation extends BaseEntity {
  @Field({nullable: true})
  @PrimaryColumn({default: 1})
  id_reserva: number;

  @Field(() => String, {nullable: true})
  @PrimaryColumn({default: () => "CURRENT_TIMESTAMP(6)"})
  fecha_hora: Date;

  @Column({type: "boolean", nullable: true})
  @Field(() => Boolean)
  finalizada: boolean;

  @OneToMany(() => Lend, (lend) => lend.reservation)
  lend: Promise<Lend[]>;

  @Field(() => User, {nullable: true})
  @ManyToOne(() => User, (user) => user.reservation, {
    onDelete: "CASCADE",
    cascade: true,
  })
  user: User;

  @Field(() => Material, {nullable: true})
  @ManyToOne(() => Material, (material) => material.reservation, {
    onDelete: "CASCADE",
    cascade: true,
  })
  material: Material;
}
