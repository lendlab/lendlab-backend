import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Material} from "./material";

@ObjectType()
@Entity()
export class Incident extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id_incident: number;

  @Field(() => String)
  @Column()
  observations: string;

  @Field(() => Boolean)
  @Column()
  repairs: Boolean;

  @Field(() => Boolean)
  @Column()
  complaint: Boolean;

  @Field(() => Boolean)
  @Column()
  solved: Boolean;

  @Field(() => String)
  @Column({type: "date"})
  date: Date;

  @Field(() => Material)
  @ManyToOne(() => Material, (material) => material.incident, {
    onDelete: "CASCADE",
  })
  material: Material;
}
