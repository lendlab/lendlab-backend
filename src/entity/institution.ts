import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Corresponds} from "./corresponds";
import {Material} from "./material";
import {User} from "./user";

@ObjectType()
@Entity()
export class Institution extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id_institution: number;

  @Field()
  @Column({unique: true})
  institution_name: string;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  phone: number;

  @OneToMany(() => User, (user) => user.institution)
  user: Promise<User[]>;

  @OneToMany(() => Corresponds, (corresponds) => corresponds.institution)
  corresponds: Promise<Corresponds[]>;

  @OneToMany(() => Material, (material) => material.institution)
  material: Promise<Material[]>;
}
