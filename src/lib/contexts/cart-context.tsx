"use client"
import { createContext, useContext, useState } from "react";

type CartContextProps = {
  addToCart: (cartItem: any) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartItems: any;
};

const CartContext = createContext<CartContextProps | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItem] = useState<any>([]);

  const addToCart = (cartItem: any) => {
    const newCart = [...cartItems];

    const filteredItem = newCart.filter(
      (item) =>
        item.id === cartItem.id && item.variant?.id === cartItem.variant?.id
    );

    if (filteredItem.length > 0) {
      const index = newCart.findIndex(
        (item) =>
          item.id === cartItem.id && item.variant?.id === cartItem.variant?.id
      );
      newCart[index].quantity += cartItem.quantity;

      setCartItem(newCart);
    } else {
      newCart.push(cartItem);

      setCartItem(newCart);
    }
  };
  const removeFromCart = (id: number) => {
    const newCart = [...cartItems];

    const index = newCart.findIndex((item) => item.cart_item_id === id);

    newCart.splice(index, 1);

    setCartItem(newCart);
  };
  const updateQuantity = (id: number, quantity: number) => {
    const newCart = [...cartItems];

    const index = newCart.findIndex((item) => item.cart_item_id === id);

    newCart[index].quantity = quantity;

    setCartItem(newCart);
  };
  const clearCart = () => {
    setCartItem([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useProducts must be used within a ProductContextProvider");
  }
  return context;
};
