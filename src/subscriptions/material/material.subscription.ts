import {Resolver, Root, Subscription} from "type-graphql";
import {Material} from "../../entity/material";

@Resolver()
export class MaterialSubscription {
  @Subscription({topics: "CREATE_MATERIAL"})
  newMaterialSubscription(@Root() payload: Material): Material {
    return payload;
  }
}
