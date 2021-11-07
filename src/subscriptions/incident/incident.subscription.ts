import {Resolver, Root, Subscription} from "type-graphql";
import {Incident} from "../../entity/incident";

@Resolver()
export class IncidentSubscription {
  @Subscription({topics: "CREATE_INCIDENT"})
  newIncidentSubscription(@Root() payload: Incident): Incident {
    return payload;
  }
}
