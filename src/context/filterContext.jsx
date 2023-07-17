/* eslint-disable react/prop-types */
import { useReducer, useEffect } from "react";
import { createContext, useContext } from "react";
import { useProductsContext } from "./productsContext";
import reducer from "../reducers/filterReducer";

import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions";

const FilterContext = createContext();
const initialState = {
  allProducts: [],
  filteredProducts: [],
  gridView: true,
  sort: "price-lowest",
};

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort]);

  // *? we need to add products in the dependency array because initially our products are empty and our fucntionality depends upon that.

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    const value = e.target.value;

    dispatch({ type: UPDATE_SORT, payload: value });
    console.log(value);
  };

  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, setGridView, setListView }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
