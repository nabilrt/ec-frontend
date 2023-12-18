import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};
const ProductCard = ({
  id,
  description,
  image,
  name,
  price,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col justify-center w-[22%] shadow-lg text-center h-auto rounded-xl">
      <img
        src={image}
        alt=""
        className="mb-2 items-center w-1/2 m-auto h-1/2 "
      />

      <Link href={`/products/${id}`} className="font-semibold mt-2">
        {name}
      </Link>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
      <p className="mt-2 font-semibold mb-4">Price: {price}$</p>
    </div>
  );
};

export default ProductCard;
