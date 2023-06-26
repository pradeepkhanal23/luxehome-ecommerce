import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";

const productsReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }
  return state;
  //   throw new Error(`No matching "${action.type}"- action type`);
};

export default productsReducer;
