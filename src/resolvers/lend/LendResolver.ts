import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Lend } from "../../entity/lend";

@InputType()
class ReservationInputa {
  @Field()
  id_reserva: number;

  @Field(() => Date)
  fecha_hora: Date;

  @Field()
  finalizada: boolean;
}

@InputType()
class LendInput {
  @Field()
  id_lend: number;

  @Field(() => String, { nullable: true })
  fecha_hora_presta: Date;

  @Field(() => String, { nullable: true })
  fecha_vencimiento: Date;

  @Field(() => String)
  fecha_devolucion: Date;

  @Field(() => ReservationInputa)
  reservation: ReservationInputa;
}

@Resolver()
export class LendResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }

  @Query(() => [Lend])
  async lend() {
    const lend = await Lend.find({
      relations: ["reservation"],
    });
    console.log(lend);
    return lend;
  }

  @Mutation(() => Lend)
  async createLend(@Arg("data", () => LendInput) data: LendInput) {
    return Lend.create({ ...data }).save();
  }
}
