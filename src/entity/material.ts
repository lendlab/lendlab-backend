import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lend } from "./lend";
import { Reservation } from "./reservation";

@ObjectType()
@Entity()
export class Material extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id_material: number;

  @Field()
  @Column()
  nombre: string;

  @Field()
  @Column()
  etiqueta: string;

  @Field()
  @Column()
  categoria: string;

  @Field()
  @Column()
  descripcion: string;

  @Field()
  @Column()
  cantidad: number;

  @Field()
  @Column()
  foto: string;

  @Field()
  @Column()
  estado: string;

  @OneToMany(() => Reservation, (reservation) => reservation.material)
  reservation: Reservation[];

  @OneToMany(() => Lend, (lend) => lend.material)
  lend: Lend[];
}
