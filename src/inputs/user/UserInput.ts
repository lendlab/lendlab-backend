import {Field, InputType} from "type-graphql";

@InputType()
class user_course {
  @Field()
  course_token: string;
}

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

  @Field(() => user_course)
  course: user_course;
}
