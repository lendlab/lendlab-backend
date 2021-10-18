import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

  @Field(() => Date)
  @Column({type: "date"})
  date: Date;
}
