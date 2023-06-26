/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";
import reducer from "../reducers/productsReducer";

const initialState = {
  isSidebarOpen: false,
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, initialState);

  const sidebarOpen = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const sidebarClose = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider value={{ ...state, sidebarClose, sidebarOpen }}>
      {children}
    </ProductsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
