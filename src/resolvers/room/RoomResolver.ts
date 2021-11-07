import {Room} from "../../entity/room";
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
import {RoomInput} from "../../inputs/room/room.input";

@Resolver()
export class RoomResolver {
  @Query(() => [Room])
  async gerAllRooms() {
    const room = getRepository(Room)
      .createQueryBuilder("room")
      .innerJoinAndSelect("room.institution", "institution")
      .getMany();

    return room;
  }
  @Query(() => Room)
  async getRoomByNumber(@Arg("room_number", () => Int) room_number: number) {
    //find room by room numbre

    const room = getRepository(Room)
      .createQueryBuilder("room")
      .innerJoinAndSelect("room.institution", "institution")
      .where(`room.room_number = ${room_number}`)
      .getOne();

    return room;
  }

  @Mutation(() => Room, {nullable: false})
  async createRoom(
    @Arg("data", () => RoomInput) data: RoomInput,
    @PubSub() pubsub: PubSubEngine
  ) {
    const room = await Room.create({...data}).save();

    pubsub.publish("CRATE_ROOM", room);

    return room;
  }
}
