import {Field, InputType} from "type-graphql";

//enum userTypes {
//  laboratorista = "laboratorista",
//  alumno = "alumno",
//  profesor = "profesor",
//}

@InputType()
class userCourse {
  @Field()
  course_name: string;
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

  @Field(() => userCourse)
  course: userCourse;
}
