import {Resolver, Root, Subscription} from "type-graphql";
import {Lend} from "../../entity/lend";

@Resolver()
export class LendSubscription {
  @Subscription({topics: "CREATE_LEND"})
  newLendSubscription(@Root() payload: Lend): Lend {
    return payload;
  }
}
