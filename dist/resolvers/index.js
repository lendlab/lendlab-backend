"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaIndex = void 0;
const type_graphql_1 = require("type-graphql");
const InstitutionResolver_1 = require("./institution/InstitutionResolver");
const LendResolver_1 = require("./lend/LendResolver");
const MaterialResolver_1 = require("./material/MaterialResolver");
const ReservationResolver_1 = require("./reservation/ReservationResolver");
const LoginResolver_1 = require("./users/LoginResolver");
const LogoutResolver_1 = require("./users/LogoutResolver");
const MeResolver_1 = require("./users/MeResolver");
const RegisterResolver_1 = require("./users/RegisterResolver");
exports.schemaIndex = (0, type_graphql_1.buildSchema)({
    resolvers: [
        RegisterResolver_1.RegisterResolver,
        LoginResolver_1.LoginResolver,
        MeResolver_1.MeResolver,
        LogoutResolver_1.LogOutResolver,
        MaterialResolver_1.MaterialResolver,
        ReservationResolver_1.ReservationResolver,
        LendResolver_1.LendResolver,
        InstitutionResolver_1.InstitutionResolver,
    ],
    validate: false,
});
//# sourceMappingURL=index.js.map