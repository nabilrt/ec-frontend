import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type ProductCardProps = {
  itemName: string;
};
const ProductCard = ({ itemName }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="flex flex-col justify-center w-[22%] shadow-lg text-center h-auto">
      <img
        src={itemName}
        alt=""
        className="mb-2 items-center w-full m-auto h-auto"
      />
      <h4 className="font-semibold mt-2">IPhone 14 Pro</h4>
      <p className="text-sm text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptas.
      </p>
      <p className="mt-2 font-semibold">Price: 150$</p>
      {quantity < 1 ? (
        <Button
          className="w-1/6 m-auto mb-4 mt-4 h-auto"
          onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
        >
          <FontAwesomeIcon icon={faShoppingBag} />
        </Button>
      ) : (
        <div className="flex w-1/3 m-auto pl-4  space-x-2 h-auto">
          <Button
            className=" "
            onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
          >
            -
          </Button>
          <div className="mt-1 text-center px-1 py-2">{quantity}</div>
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
