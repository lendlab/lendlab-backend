import {
  Arg,
  Int,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
} from "type-graphql";
import {getRepository} from "typeorm";

import {IncidentInput} from "../../inputs/incident/incident.input";
import {Incident} from "../../entity/incident";
import {UpdateIncidentInput} from "../../inputs/incident/incident.update.input";

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
  async newIncident(
    @Arg("data") data: IncidentInput,
    @PubSub() pubsub: PubSubEngine
  ): Promise<Incident> {
    const incident = await Incident.create({...data}).save();
    pubsub.publish("CREATE_INCIDENT", incident);
    return incident;
  }

  @Mutation(() => Incident, {nullable: true})
  async updateIncident(
    @Arg("id_incident", () => Int) id_incident: number,
    @Arg("data", () => UpdateIncidentInput) data: UpdateIncidentInput
  ) {
    await Incident.update({id_incident}, data);
    const updatedIncident = await Incident.findOne({id_incident});

    if (!updatedIncident) {
      throw new Error();
    }

    return updatedIncident;
  }

  @Mutation(() => Boolean)
  async deleteIncident(
    @Arg("id_incident", () => Int) id_incident: number
  ): Promise<Boolean> {
    await Incident.delete({id_incident});
    return true;
  }
}
