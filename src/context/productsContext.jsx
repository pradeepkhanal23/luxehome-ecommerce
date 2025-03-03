/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import reducer from "../reducers/productsReducer";
import { useSupabase } from "../context/supabaseContext";

const initialState = {
  isSidebarOpen: false,
  productsLoading: true,
  productsError: false,
  products: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const supabase = useSupabase(); // Get the shared Supabase client

  const sidebarOpen = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const sidebarClose = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // Fetch all products from Supabase
  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const { data, error } = await supabase.from("products").select("*"); // Fetch all columns (adjust if needed)

      console.log(data);

      if (error) throw error;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      console.error("Error fetching products:", error.message);
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  // Fetch single product by ID from Supabase
  const fetchSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id) // Filter by ID
        .single(); // Return a single object

      if (error) throw error;

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      console.error("Error fetching single product:", error.message);
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch all products on mount
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, sidebarClose, sidebarOpen, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
