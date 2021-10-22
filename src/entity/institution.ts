import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity()
export class Institution extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id_institution: number;

  @Field(() => String)
  @Column({unique: true})
  institution_name: string;

  @Field(() => String)
  @Column()
  city: string;

  @Field(() => String)
  @Column()
  type: string;

  @Field(() => String)
  @Column()
  phone: string;
}
