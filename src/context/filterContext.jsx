/* eslint-disable react/prop-types */
import { useReducer, useEffect } from "react";
import { createContext, useContext } from "react";
import { useProductsContext } from "./productsContext";
import reducer from "../reducers/filterReducer";

import { LOAD_PRODUCTS } from "../actions";

const FilterContext = createContext();
const initialState = {
  allProducts: [],
  filteredProducts: [],
};

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value="filter products">
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
