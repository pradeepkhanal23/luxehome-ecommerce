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
  FILTER_PRODUCTS,
  UPDATE_FILTER,
  CLEAR_FILTER,
} from "../actions";

const FilterContext = createContext();

const initialState = {
  allProducts: [],
  filteredProducts: [],
  gridView: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    min_price: 0,
    max_price: 0,
    shipping: false,
  },
};

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

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
  };

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "category") {
      value = e.target.textContent;
    }

    if (name === "color") {
      value = e.target.dataset.color;
    }

    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    if (name === "clear-filters") {
      dispatch({ type: CLEAR_FILTER });
    }

    dispatch({
      type: UPDATE_FILTER,
      payload: {
        name,
        value,
      },
    });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        setGridView,
        setListView,
        updateFilter,
        clearFilter,
      }}
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
