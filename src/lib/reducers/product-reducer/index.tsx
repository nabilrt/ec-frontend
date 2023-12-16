export const INITIAL_STATE = {
  products: [],
  key: "",
  loading: false,
  error: null,
};

export const productReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "FETCH_PRODUCTS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SEARCH_PRODUCTS":
      const products = [...action.payload];
      const filteredItems = products.filter((item: any) =>
        item.name.toLowerCase().includes(action.key.toLowerCase())
      );

      return {
        ...state,
        products: [...filteredItems],
      };

    default:
      return state;
  }
};
