import * as menuConst from "../const/menu.const.js";

const initState = {
  isOpen: false
};

const menu = (state = initState, action) => {
  switch (action.type) {
    case menuConst.SET_OPEN:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export default menu;
