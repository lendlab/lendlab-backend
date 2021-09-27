import { Field, InputType } from "type-graphql";

@InputType()
export class MaterialUpdateInput {
  @Field({ nullable: true })
  nombre: string;

  @Field({ nullable: true })
  etiqueta: string;

  @Field({ nullable: true })
  categoria: string;

  @Field({ nullable: true })
  descripcion: string;

  @Field({ nullable: true })
  cantidad: number;

  @Field({ nullable: true })
  foto: string;

  @Field({ nullable: true })
  estado: string;
}
