"use client";
import { useCart } from "@/lib/contexts/cart-context";
import Button from "@/modules/button";
import CartItemCard from "@/modules/cart-item-card";
import OrderSummary from "@/modules/order-summary";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Cart = () => {
  const { cartItems } = useCart();

  const calculateTotalPrice = () => {
    const price = cartItems.reduce((acc: any, item: any) => {
      return acc + item.variant.price * item.quantity;
    }, 0);

    return price;
  };
  return (
    <div className="p-4 flex flex-col">
      <p className="font-semibold text-2xl">Your Cart</p>
      <div className="p-4 flex flex-row w-[100%]  space-x-3">
        <div className="flex flex-col w-[50%] space-y-3">
          {cartItems.map((item: any) => {
            return <CartItemCard {...item} />;
          })}
        </div>

        <OrderSummary totalPrice={calculateTotalPrice()} />
      </div>
    </div>
  );
};

export default Cart;
