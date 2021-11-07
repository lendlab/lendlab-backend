"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaIndex = void 0;
const graphql_subscriptions_1 = require("graphql-subscriptions");
const type_graphql_1 = require("type-graphql");
const InstitutionResolver_1 = require("./institution/InstitutionResolver");
const LendResolver_1 = require("./lend/LendResolver");
const MaterialResolver_1 = require("./material/MaterialResolver");
const ReservationResolver_1 = require("./reservation/ReservationResolver");
const LoginResolver_1 = require("./users/LoginResolver");
const LogoutResolver_1 = require("./users/LogoutResolver");
const MeResolver_1 = require("./users/MeResolver");
const RegisterResolver_1 = require("./users/RegisterResolver");
const CourseResolver_1 = require("./course/CourseResolver");
const IncidentResolver_1 = require("./incident/IncidentResolver");
const RoomResolver_1 = require("./room/RoomResolver");
const user_subscription_1 = require("../subscriptions/user/user.subscription");
const reservation_subscription_1 = require("../subscriptions/reservation/reservation.subscription");
const lend_subscription_1 = require("../subscriptions/lend/lend.subscription");
const material_subscription_1 = require("../subscriptions/material/material.subscription");
const incident_subscription_1 = require("../subscriptions/incident/incident.subscription");
const reservate_room_subscription_1 = require("../subscriptions/reservate_room/reservate.room.subscription");
const resolversArray = [
    RegisterResolver_1.RegisterResolver,
    LoginResolver_1.LoginResolver,
    MeResolver_1.MeResolver,
    LogoutResolver_1.LogOutResolver,
    MaterialResolver_1.MaterialResolver,
    ReservationResolver_1.ReservationResolver,
    LendResolver_1.LendResolver,
    InstitutionResolver_1.InstitutionResolver,
    CourseResolver_1.CourseResolver,
    IncidentResolver_1.IncidentResolver,
    RoomResolver_1.RoomResolver,
    user_subscription_1.UserSubscription,
    reservation_subscription_1.ReservationSubscription,
    lend_subscription_1.LendSubscription,
    material_subscription_1.MaterialSubscription,
    incident_subscription_1.IncidentSubscription,
    reservate_room_subscription_1.ReservateRoomSubscription,
];
exports.schemaIndex = (0, type_graphql_1.buildSchema)({
    pubSub: new graphql_subscriptions_1.PubSub(),
    resolvers: resolversArray,
    validate: false,
});
//# sourceMappingURL=index.js.map