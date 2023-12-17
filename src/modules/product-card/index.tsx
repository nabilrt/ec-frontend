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
  const [quantity, setQuantity] = useState(0);
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
      <p className="mt-2 font-semibold">Price: {price}$</p>
      {quantity < 1 ? (
        <div className="flex w-1/3 m-auto mb-4 mt-4 ">
          <Button
            className="m-auto"
            onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          >
            <FontAwesomeIcon icon={faShoppingBag} />
          </Button>
        </div>
      ) : (
        <div className="flex w-1/3 m-auto pl-4 mb-4 mt-4  space-x-2 ">
          <Button
            className=" "
            onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
          >
            -
          </Button>
          <div className="mt-1 text-center ">{quantity}</div>
          <Button
            className=" "
            onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          >
            +
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
