"use client";
import { useProducts } from "@/lib/contexts/product-context";
import Button from "@/modules/button";
import ProductCard from "@/modules/product-card";
import SearchInput from "@/modules/search-input";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const ProductsPage = () => {
  const { state, showResults } = useProducts();
  const [offset, setOffset] = useState(0);
  const LIMIT = 4;
  const [totalShowLimit, setTotalShowLimit] = useState(LIMIT);
  const [key, setKey] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="p-4 flex flex-col justify-center space-y-5">
      <h1 className="font-semibold text-2xl uppercase text-center">
        ALL Products
      </h1>
      <div className="flex w-2/3 m-auto items-center space-x-3">
        <SearchInput
          placeholder="Enter a keyword"
          ref={inputRef}
          value={key}
          onKeyUp={(e) => {
            showResults(key);
          }}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap space-y-3 space-x-4 justify-center mb-9">
        <>
          {state.products?.length === 0 ? (
            <div className="h-screen">
              <p className="text-center text-2xl font-semibold">
                No products found
              </p>
            </div>
          ) : (
            <>
              {state.products
                ?.slice(offset, totalShowLimit)
                .map((product: any) => (
                  <ProductCard {...product} />
                ))}
            </>
          )}
        </>
      </div>
      <div className="flex flex-row w-1/12 m-auto space-x-3">
        <Button
          variant="secondary"
          disabled={offset === 0}
          onClick={() => {
            setOffset((prev) => prev - LIMIT); // suppose offset was 4, now it will be 0
            setTotalShowLimit((prev) => prev - LIMIT);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            const newOffset = offset + LIMIT;
            setOffset(newOffset);
            setTotalShowLimit(newOffset + LIMIT);
          }}
          disabled={offset + LIMIT >= state.products?.length!}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </div>
  );
};

export default ProductsPage;
