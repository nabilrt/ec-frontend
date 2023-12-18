import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import { useState } from "react";
import { useCart } from "@/lib/contexts/cart-context";

type VariantProps = {
  id: number;
  name: string;
  price: number;
};
type CartProps = {
  cart_item_id: string;
  id: number;
  name: string;
  quantity: number;
  image: string;
  variant_title: string;
  variant: VariantProps;
};

const CartItemCard = ({
  cart_item_id,
  id,
  image,
  name,
  variant_title,
  quantity,
  variant,
}: CartProps) => {
  const [quant, setQuant] = useState(1);
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="p-4 flex flex-row justify-start space-x-5 mr-auto border shadow-lg rounded-lg w-[100%]">
      <img src={image} alt="" className="h-[150px] w-[150px] " />
      <div className="flex flex-col space-y-3 flex-grow">
        <p className="font-semibold text-xl">{name}</p>
        <span className="border border-black mr-auto p-1 text-sm">
          {variant_title}:{variant.name}
        </span>
        <div className="flex flex-row space-x-3 w-fit border border-gray-100 border-solid rounded-lg bg-gray-100">
          <Button
            variant="primary"
            className="rounded-lg w-fit"
            onClick={() => setQuant((prev) => prev - 1)}
            disabled={quantity === 1}
          >
            -
          </Button>
          <p className="m-auto w-fit">{quant}</p>
          <Button
            variant="primary"
            className="rounded-lg w-fit"
            onClick={() => setQuant((prev) => prev + 1)}
          >
            +
          </Button>
        </div>
      </div>
      <div className="flex flex-col space-y-14 ml-auto text-right">
        <p className="font-semibold text-xl">
          ${(quantity * variant.price).toFixed(2)}
        </p>
        <div className="flex font-semibold text-xl space-x-3">
          <Button
            variant="warning"
            className="rounded-lg"
            onClick={() => updateQuantity(cart_item_id, quant)}
          >
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ color: "#ffffff" }}
            />
          </Button>
          <Button
            variant="danger"
            className="rounded-lg"
            onClick={() => removeFromCart(cart_item_id)}
          >
            <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ffffff" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
