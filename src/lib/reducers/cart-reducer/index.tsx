type ProductDataProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  variant_title: string;
  variants: VariantProps[];
};

type VariantProps = {
    id: number;
    name: string;
    price: number;
  };

export const INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newCart = [...state.cartItems];

      const filteredItem = newCart.filter(
        (item: any) =>
          item.cart_item_id === action.payload.cart_item_id &&
          item.id === action.payload.id &&
          item.variant?.id === action.payload.variant?.id
      );

      if (filteredItem) {
        const updatedItem = {
          ...filteredItem,
          quantity: filteredItem.quantity + action.payload.quantity,
        };

        const updatedArrayItems = newCart.map((item: any) =>
          item.cart_item_id === action.payload.cart_item_id ? updatedItem : item
        );

        return {
          ...state,
          cartItems: updatedArrayItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case "REMOVE_FROM_CART":
      const newCart2 = [...state.cartItems];

      const index = newCart2.findIndex(
        (item) => item.cart_item_id === action.payload
      );

      newCart2.splice(index, 1);

      return {
        ...state,
        cartItems: newCart2,
      };

    case "UPDATE_QUANTITY":
      const newCart3 = [...state.cartItems];

      const index2 = newCart3.findIndex(
        (item) => item.cart_item_id === action.payload.cart_item_id
      );

      newCart3[index2].quantity = action.payload.quantity;

      return {
        ...state,
        cartItems: newCart3,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
