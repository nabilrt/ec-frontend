import Products from "@/lib/data/products";
import ProductCard from "../product-card";

const TrendingProducts = () => {
  const Item = Products;

  return (
    <div className="">
      <div className="w-1/2 m-auto text-center mt-4 mb-3">
        <p className="font-semibold text-xl">Trending Products</p>
      </div>
      <div className="flex flex-wrap space-y-3 space-x-4 justify-center mb-9">
        <ProductCard {...Item[0]} />
        <ProductCard {...Item[3]} />
        <ProductCard {...Item[4]} />
        <ProductCard {...Item[6]} />
      </div>
    </div>
  );
};

export default TrendingProducts;
