import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field()
  cedula: number;

  @Field()
  nombre: string;

  @Field()
  pass: string;

  @Field()
  direccion: string;

  @Field()
  foto_usuario: string;

  @Field()
  telefono: number;

  @Field()
  tipo_usuario: string;

  @Field()
  fecha_nacimiento: string;
}
