import {Resolver, Root, Subscription} from "type-graphql";
import {Reservation} from "../../entity/reservation";

@Resolver()
export class ReservationSubscription {
  @Subscription({topics: "CREATE_RESERVATION"})
  newReservationSubscription(@Root() payload: Reservation): Reservation {
    return payload;
  }
}
