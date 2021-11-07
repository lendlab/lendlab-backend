import {User} from "../../entity/user";
import {Resolver, Root, Subscription} from "type-graphql";

@Resolver()
export class UserSubscription {
  @Subscription({topics: "CREATE_USER"})
  newUserSubscription(@Root() payload: User): User {
    return payload;
  }
}
