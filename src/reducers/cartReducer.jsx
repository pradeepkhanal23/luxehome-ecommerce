import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

import { Placeholder } from "../assets/images";

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    console.log(product);

    const tempCartItem = state.cart.find((item) => item.id === id + color);

    if (tempCartItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }

          return {
            ...cartItem,
            amount: newAmount,
          };
        } else {
          return cartItem;
        }
      });

      return {
        ...state,
        cart: tempCart,
      };
    } else {
      const newItem = {
        id: id + color,
        amount,
        color,
        price: product.price || 0,
        max: product.stock || 1,
        image: product?.image || Placeholder,
        name: product.name || "unnamed product",
      };

      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;

        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );

    return {
      ...state,
      total_items,
      total_amount,
    };
  }

  if (action.type === REMOVE_CART_ITEM) {
    let tempCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    let tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "increase") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return {
            ...item,
            amount: newAmount,
          };
        }
        if (value === "decrease") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }

          return {
            ...item,
            amount: newAmount,
          };
        }
      }
      return item;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }

  throw new Error(`No matching "${action.type}"- action type `);
};

export default cartReducer;
