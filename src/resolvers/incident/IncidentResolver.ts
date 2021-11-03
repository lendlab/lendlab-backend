import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {getRepository} from "typeorm";

import {IncidentInput} from "../../inputs/incident/incident.input";
import {Incident} from "../../entity/incident";

@Resolver()
export class IncidentResolver {
  @Query(() => [Incident])
  async getIncidents() {
    const incident = await getRepository(Incident)
      .createQueryBuilder("incident")
      .innerJoinAndSelect("incident.material", "material")
      .innerJoinAndSelect("material.institution", "institution")
      .getMany();

    //select * from incident JOIN material on incident.materialIdMaterial = material.id_material JOIN institution ON institution.id_institution= material.institutionIdInstitution"
    return incident;
  }

  @Mutation(() => Incident)
  async newIncident(@Arg("data") data: IncidentInput): Promise<Incident> {
    const incident = Incident.create({...data}).save();
    return incident;
  }

  @Mutation(() => Incident)
  async updateIncident() {
    const incident = Incident.create({}).save();
    return incident;
  }

  @Mutation(() => Incident)
  async deleteIncident() {
    const incident = Incident.create({}).save();
    return incident;
  }
}
