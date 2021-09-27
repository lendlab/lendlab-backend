import { Field, InputType } from "type-graphql";

@InputType()
export class MaterialInput {
  @Field()
  nombre: string;

  @Field()
  etiqueta: string;

  @Field()
  categoria: string;

  @Field()
  descripcion: string;

  @Field()
  cantidad: number;

  @Field()
  foto: string;

  @Field()
  estado: string;
}
