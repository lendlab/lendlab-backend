import {Field, InputType} from "type-graphql";

@InputType()
class material_incident_id {
  @Field()
  id_material: number;
}

@InputType()
export class IncidentInput {
  @Field()
  observations: string;

  @Field()
  repairs: boolean;

  @Field()
  complaint: boolean;

  @Field()
  solved: boolean;

  @Field(() => String)
  date: Date;

  @Field(() => material_incident_id)
  material: material_incident_id;
}
