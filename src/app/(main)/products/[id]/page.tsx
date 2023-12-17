"use client";
import { useCart } from "@/lib/contexts/cart-context";
import { useProducts } from "@/lib/contexts/product-context";
import Button from "@/modules/button";
import VariantCard from "@/modules/variant-card";
import { v4 as uuidv4 } from "uuid";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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

const ProductDetails = () => {
  const params = useParams();
  const { getProductById } = useProducts();
  const [product, setProduct] = useState<ProductDataProps>();
  const { id } = params;
  const [isSelected, setIsSelected] = useState<number>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const item = getProductById(Number(id));
    setProduct(item);
  }, []);

  const handleOnChange = (id: number) => {
    setIsSelected(id);
  };

  const handleAddtoCart = () => {
    const cartItem = {
      cart_item_id: uuidv4(),
      id: product?.id,
      name: product?.name,
      quantity: quantity,
      variant: product?.variants.find((variant) => variant.id === isSelected),
    };
    addToCart(cartItem);
  };

  return (
    <div className="p-4 w-[85%] flex flex-row m-auto justify-center space-x-5 mt-4 mb-16">
      <div className="w-[23%] justify-center">
        <img src={product?.image} alt="" className="rounded-3xl" />
      </div>
      <div className="w-[62%] justify-center">
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="font-bold text-3xl mt-3">{product?.name}</h2>
          <p className="text-sm text-balance">
            {product?.description} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Temporibus reprehenderit debitis quae quas, labore
            eveniet? Asperiores, nam dolorum ut laborum expedita voluptatibus.
            Doloribus illo adipisci magni veritatis cupiditate ea saepe neque
            voluptas nesciunt perferendis!
          </p>
          <p className="text-2xl text-[#fc8eac] font-semibold">
            ${product?.price.toFixed(2)}
          </p>
          <div className="flex flex-row space-x-2">
            <p className="mt-1 font-semibold uppercase">
              {product?.variant_title}:
            </p>
            {product?.variants.map((variant) => {
              return (
                <VariantCard
                  id={variant.id}
                  title={variant.name}
                  handleOnChange={handleOnChange}
                  isSelected={isSelected}
                />
              );
            })}
            {isSelected && (
              <span
                className="text-gray-400 mt-1 cursor-pointer"
                onClick={() => {
                  setIsSelected(undefined);
                  setQuantity(1);
                }}
              >
                x
              </span>
            )}
          </div>
          <div>
            <div className="flex flex-row space-x-3 ">
              <div className="flex flex-row space-x-3 border border-gray-100 border-solid rounded-lg bg-gray-100">
                <Button
                  variant="primary"
                  className="rounded-lg"
                  onClick={() => setQuantity((prev) => prev - 1)}
                  disabled={quantity === 1 || isSelected === undefined}
                >
                  -
                </Button>
                <p className="m-auto">{quantity}</p>
                <Button
                  variant="primary"
                  className="rounded-lg"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  disabled={isSelected === undefined}
                >
                  +
                </Button>
              </div>
              <div className="flex flex-row pr-2">
                <Button
                  variant="secondary"
                  className="rounded-2xl"
                  disabled={isSelected === undefined}
                  onClick={handleAddtoCart}
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
