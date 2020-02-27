import * as usersConst from "../const/users.const.js";

const initState = {
  users: []
};

const users = (state = initState, action) => {
  switch (action.type) {
    case usersConst.GET_ALL_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default users;
