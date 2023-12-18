"use client";
import { createContext, useContext, useReducer, useState } from "react";
import toast from "react-hot-toast";

type CartContextProps = {
  addToCart: (cartItem: any) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
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
      toast.success("Added to Cart!", {
        duration: 2000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      newCart.push(cartItem);

      setCartItem(newCart);
    }
  };
  const removeFromCart = (id: string) => {
    const newCart = [...cartItems];

    const index = newCart.findIndex((item) => item.cart_item_id === id);

    newCart.splice(index, 1);

    setCartItem(newCart);
    toast.success("Item Removed From Cart!", {
      duration: 2000,

      // Styling
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  const updateQuantity = (id: string, quantity: number) => {
    const newCart = [...cartItems];

    const index = newCart.findIndex((item) => item.cart_item_id === id);

    newCart[index].quantity = quantity;

    setCartItem(newCart);

    toast.success("Cart Updated!", {
      duration: 2000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  const clearCart = () => {
    setCartItem([]);
    toast.success("Emptyed the Cart!", {
      duration: 2000,

      // Styling
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
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
