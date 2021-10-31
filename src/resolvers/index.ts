import {buildSchema} from "type-graphql";

import {InstitutionResolver} from "./institution/InstitutionResolver";
import {LendResolver} from "./lend/LendResolver";
import {MaterialResolver} from "./material/MaterialResolver";
import {ReservationResolver} from "./reservation/ReservationResolver";
import {LoginResolver} from "./users/LoginResolver";
import {LogOutResolver} from "./users/LogoutResolver";
import {MeResolver} from "./users/MeResolver";
import {RegisterResolver} from "./users/RegisterResolver";
import {CourseResolver} from "./course/CourseResolver";

export const schemaIndex = buildSchema({
  resolvers: [
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
  ],
  validate: false,
});
