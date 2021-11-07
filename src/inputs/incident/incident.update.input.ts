import {Field, InputType} from "type-graphql";

@InputType()
class material_incident_id_update {
  @Field({nullable: true})
  id_material: number;
}

@InputType()
export class UpdateIncidentInput {
  @Field({nullable: true})
  observations: string;

  @Field({nullable: true})
  repairs: boolean;

  @Field({nullable: true})
  complaint: boolean;

  @Field({nullable: true})
  solved: boolean;

  @Field(() => String, {nullable: true})
  date: Date;

  @Field(() => material_incident_id_update, {nullable: true})
  material: material_incident_id_update;
}
