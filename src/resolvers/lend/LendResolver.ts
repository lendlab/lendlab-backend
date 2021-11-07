import {
  Arg,
  Int,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
} from "type-graphql";
import {createQueryBuilder, getRepository} from "typeorm";
import {Lend} from "../../entity/lend";
import {LendInput} from "../../inputs/lend/lend.input";
import {LendUpdateInput} from "../../inputs/lend/lend.update.input";
import {LendResponse} from "../../errors/Lend.errors";

@Resolver()
export class LendResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }

  @Query(() => [Lend])
  async lend() {
    const lend = await getRepository(Lend)
      .createQueryBuilder("lend")
      .innerJoinAndSelect("lend.reservation", "reservation")
      .innerJoinAndSelect("reservation.material", "material")
      .innerJoinAndSelect("reservation.user", "user")
      .getMany();

    // SELECT * from lend JOIN reservation on lend.reservationIdReserva = reservation.id_reserva JOIN user ON user.cedula = reservation.userCedula
    return lend;
  }

  @Query(() => Int)
  async getLendsCount() {
    const {count} = await createQueryBuilder("lend")
      .select("COUNT(*)", "count")
      .getRawOne();

    return count;
  }

  @Mutation(() => Lend)
  async createLend(
    @Arg("data", () => LendInput) data: LendInput,
    @PubSub() pubsub: PubSubEngine
  ): Promise<Lend> {
    const lend = await Lend.create({...data}).save();
    pubsub.publish("CREATE_LEND", lend);

    return lend;
  }

  @Mutation(() => LendResponse)
  async updateLend(
    @Arg("id_lend", () => Int) id_lend: number,
    @Arg("data", () => LendUpdateInput) data: LendUpdateInput
  ) {
    await Lend.update({id_lend}, data);
    const lend = Lend.findOne(id_lend);
    if (!lend) {
      return null;
    }

    return lend;
  }

  @Mutation(() => Boolean)
  async deleteLend(
    @Arg("id_lend", () => Int) id_lend: number,
    @Arg("fecha_hora_presta", () => String) fecha_hora_presta: string
  ): Promise<Boolean> {
    await Lend.delete({id_lend, fecha_hora_presta});
    return true;
  }
}
