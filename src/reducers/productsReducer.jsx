import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from "../actions";

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

  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      productsLoading: true,
    };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProducts = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      productsLoading: false,
      products: action.payload,
      featuredProducts,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      productsError: true,
    };
  }
  throw new Error(`No matching "${action.type}"- action type`);
};

export default productsReducer;
