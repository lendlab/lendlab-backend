import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Incident} from "./incident";
import {Institution} from "./institution";
import {Reservation} from "./reservation";

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
  estado: string;

  @Field(() => Institution)
  @ManyToOne(() => Institution, (institution) => institution.material, {
    onDelete: "CASCADE",
  })
  institution: Institution;

  @OneToMany(() => Reservation, (reservation) => reservation.material)
  reservation: Promise<Reservation[]>;

  @OneToMany(() => Incident, (incident) => incident.material)
  incident: Promise<Incident[]>;
}
