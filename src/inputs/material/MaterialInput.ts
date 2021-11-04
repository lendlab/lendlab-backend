import {Field, InputType} from "type-graphql";

@InputType()
class institution_material {
  @Field()
  id_institution: number;
}

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

  @Field(() => institution_material)
  institution: institution_material;
}
