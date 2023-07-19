import { ADD_TO_CART } from "../actions";

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

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
        price: product.price,
        max: product.stock,
        image: product.images[0].url,
        name: product.name,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
  }

  throw new Error(`No matching "${action.type}"- action type `);
};

export default cartReducer;
