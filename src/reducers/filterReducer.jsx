import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTER,
  CLEAR_FILTER,
  FILTER_PRODUCTS,
} from "../actions";

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;
    let tempProducts = [...filteredProducts];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return {
      ...state,
      filteredProducts: tempProducts,
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts = [...allProducts];

    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    // -------------------------------------------------------------------------------------------
    if (category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category.toLowerCase() === category;
      });
    }
    // -------------------------------------------------------------------------------------------
    if (company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company.toLowerCase() === company;
      });
    }
    // -------------------------------------------------------------------------------------------
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => {
          return c === color;
        });
      });
    }
    // -------------------------------------------------------------------------------------------
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }
    // -------------------------------------------------------------------------------------------
    tempProducts = tempProducts.filter((product) => product.price <= price);
    // -------------------------------------------------------------------------------------------
    return {
      ...state,
      filteredProducts: tempProducts,
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      gridView: true,
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      gridView: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === UPDATE_FILTER) {
    return {
      ...state,
      filters: {
        ...state.filters,
        [action.payload.name]: action.payload.value,
      },
    };
  }
  if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};

export default filterReducer;
