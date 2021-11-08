import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import {Institution} from "./institution";
import {Lend} from "./lend";
import {Material} from "./material";
import {User} from "./user";

@ObjectType()
@Entity()
export class Reservation extends BaseEntity {
  @Field({nullable: true})
  @PrimaryColumn({default: 1})
  id_reserva: number;

  @Field(() => Date, {nullable: true})
  @CreateDateColumn()
  @PrimaryColumn()
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

  @Field(() => Institution)
  @ManyToOne(() => Institution, (institution) => institution.reservation)
  institution: Institution;
}
