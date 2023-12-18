"use client";
import { useCart } from "@/lib/contexts/cart-context";
import Link from "next/link";

const Header = () => {
  const { cartItems } = useCart();
  return (
    <div className="flex justify-end space-x-3 p-5 pr-9 shadow-lg items-center">
      <div className="mr-auto font-semibold text-2xl cursor-pointer text-[#fc8eac] ">
        <Link href="/" className="hover:drop-shadow-xl">
          EC-Commerce
        </Link>
      </div>
      <Link href="/about" className="hover:-translate-y-1 hover:uppercase ">
        About
      </Link>
      <Link href="/products" className="hover:-translate-y-1 hover:uppercase ">
        Products
      </Link>
      <Link href="/sign-up" className="hover:-translate-y-1 hover:uppercase ">
        Sign Up
      </Link>
      <Link href="/login" className="hover:-translate-y-1 hover:uppercase ">
        Login
      </Link>
      <Link href="/cart" className="hover:-translate-y-1 hover:uppercase ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          width="20"
          viewBox="0 0 576 512"
        >
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
      </Link>
      <span>({cartItems.length})</span>
    </div>
  );
};
export default Header;
