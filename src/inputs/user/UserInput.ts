import {Field, InputType} from "type-graphql";
import {InstitutionInput} from "../institution/InstitutionInput";

@InputType()
export class UserInput {
  @Field()
  cedula: number;

  @Field()
  nombre: string;

  @Field()
  password: string;

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

  @Field(() => InstitutionInput)
  institution: InstitutionInput;
}
