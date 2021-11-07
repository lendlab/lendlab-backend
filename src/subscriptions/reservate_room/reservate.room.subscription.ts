import {Resolver, Root, Subscription} from "type-graphql";
import {Occupies} from "../../entity/occupies";
import {Room} from "../../entity/room";

@Resolver()
export class ReservateRoomSubscription {
  @Subscription({topics: "CRATE_ROOM_RESERVATION"})
  newRoomReservationSubscription(@Root() payload: Occupies): Occupies {
    return payload;
  }

  @Subscription({topics: "CRATE_ROOM"})
  newRoomSubscription(@Root() payload: Room): Room {
    return payload;
  }
}
