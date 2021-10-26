import {Ctx, Mutation} from "type-graphql";

import {MyContext} from "../../types/MyContext";

export class LogOutResolver {
  @Mutation(() => Boolean)
  logout(@Ctx() {req, res}: MyContext): Promise<unknown> {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie("qid");
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
