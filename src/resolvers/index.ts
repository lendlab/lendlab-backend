import {buildSchema, NonEmptyArray} from "type-graphql";

import {InstitutionResolver} from "./institution/InstitutionResolver";
import {LendResolver} from "./lend/LendResolver";
import {MaterialResolver} from "./material/MaterialResolver";
import {ReservationResolver} from "./reservation/ReservationResolver";
import {LoginResolver} from "./users/LoginResolver";
import {LogOutResolver} from "./users/LogoutResolver";
import {MeResolver} from "./users/MeResolver";
import {RegisterResolver} from "./users/RegisterResolver";
import {CourseResolver} from "./course/CourseResolver";
import {IncidentResolver} from "./incident/IncidentResolver";
import {PubSub} from "graphql-subscriptions";

const resolversArray = [
  //user actions
  RegisterResolver,
  LoginResolver,
  MeResolver,
  LogOutResolver,
  //material actions
  MaterialResolver,
  //reservations actions
  ReservationResolver,
  //lend actions
  LendResolver,
  //institiution actions
  InstitutionResolver,
  //course actions
  CourseResolver,
  //incident actions
  IncidentResolver,
] as const;

export const schemaIndex = buildSchema({
  pubSub: new PubSub(),
  resolvers: resolversArray as NonEmptyArray<Function>,
  validate: false,
});
