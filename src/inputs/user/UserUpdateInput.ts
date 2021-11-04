import {Field, InputType} from "type-graphql";

@InputType()
class user_course_update {
  @Field({nullable: true})
  course_id: number;
}

@InputType()
class user_institution_update {
  @Field({nullable: true})
  id_institution: number;
}

@InputType()
export class UserUpdateInput {
  @Field({nullable: true})
  nombre: string;

  @Field({nullable: true})
  password: string;

  @Field({nullable: true})
  direccion: string;

  @Field({nullable: true})
  foto_usuario: string;

  @Field({nullable: true})
  telefono: number;

  @Field({nullable: true})
  tipo_usuario: string;

  @Field({nullable: true})
  fecha_nacimiento: string;

  @Field(() => user_institution_update, {nullable: true})
  institution: user_institution_update;

  @Field(() => user_course_update, {nullable: true})
  course: user_course_update;
}
