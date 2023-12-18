"use client";

import { useCart } from "@/lib/contexts/cart-context";
import Button from "@/modules/button";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePDF } from "react-to-pdf";

const Invoice = () => {
  const { cartItems } = useCart();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const calculateTotalPrice = () => {
    const price = cartItems.reduce((acc: any, item: any) => {
      return acc + item.variant.price * item.quantity;
    }, 0);

    return price;
  };
  return (
    <div>
      <div className="p-4" ref={targetRef}>
        <div className="flex justify-between">
          <div className="mt-4">
            <p className="font-semibold text-lg">Sold by</p>
            <p className="text-lg">EC Commerce</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-lg text-end">Buyer</p>
            <p className="text-lg">John Doe</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-lg">Date:</p>
          <p className="text-lg">{new Date().toLocaleDateString()}</p>
        </div>

        <p className="font-semibold text-3xl mt-6 mb-4">Sale Invoice</p>
        <div className="flex flex-col space-y-3 mb-4">
          <div className="flex flex-row space-x-3 bg-gray-200 p-3">
            <p className="font-semibold flex-1 text-lg">Name</p>
            <p className="flex-grow pl-14 text-start font-semibold text-lg">
              Variant
            </p>
            <p className="flex-grow pl-10 font-semibold text-lg">Quantity</p>
            <p className="font-semibold text-lg">Price</p>
          </div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row space-x-3 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } p-3`}
            >
              <p className="flex-1 text-lg">{item.name}</p>
              <p className="flex-grow pl-10 text-lg">{item.variant.name}</p>
              <p className="flex-grow pl-10 text-lg">{item.quantity}</p>
              <p className="text-lg">${item.variant.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="flex p-4">
          <div className="mr-auto">Subtotal</div>
          <div className="ml-auto">${calculateTotalPrice().toFixed(2)}</div>
        </div>
        <div className="flex p-4">
          <div className="mr-auto">Tax</div>
          <div className="ml-auto">$0.00</div>
        </div>
        <hr />
        <div className="flex p-4">
          <div className="mr-auto font-semibold">Total</div>
          <div className="ml-auto font-semibold">
            ${calculateTotalPrice().toFixed(2)}
          </div>
        </div>
      </div>
      <div className="p-7">
        <Button variant="success" onClick={() => toPDF()}><FontAwesomeIcon icon={faFilePdf} style={{color: "#ffffff",}} /></Button>
      </div>
    </div>
  );
};

export default Invoice;
