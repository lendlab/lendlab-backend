import {Field, InputType} from "type-graphql";

@InputType()
class institution_material_update {
  @Field()
  id_institution: number;
}
@InputType()
export class MaterialUpdateInput {
  @Field({nullable: true})
  nombre: string;

  @Field({nullable: true})
  etiqueta: string;

  @Field({nullable: true})
  categoria: string;

  @Field({nullable: true})
  descripcion: string;

  @Field({nullable: true})
  cantidad: number;

  @Field({nullable: true})
  foto: string;

  @Field({nullable: true})
  estado: string;

  @Field(() => institution_material_update, {nullable: true})
  institution: institution_material_update;
}
