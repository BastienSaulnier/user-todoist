import * as usersConst from "../const/users.const.js";
import { users } from "../datas/users.data.js";

export const getAllUsers = () => ({
  type: usersConst.GET_ALL_USERS,
  payload: users
});
