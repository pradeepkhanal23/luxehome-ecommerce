/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_amount: 0,
  total_items: 0,
  shipping_fee: 300,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id,
        color,
        amount,
        product,
      },
    });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        toggleAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
  return useContext(CartContext);
};
