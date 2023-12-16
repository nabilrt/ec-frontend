"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Products from "../data/products";
import { INITIAL_STATE, productReducer } from "../reducers/product-reducer";

type ProductDataProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

type StateProps = {
  products: ProductDataProps[];
  key: string;
  loading: boolean;
  error: any;
};

type ProductContextProps = {
  state: StateProps;
  showResults: (key: string) => void;
};

const ProductContext = createContext<ProductContextProps | null>(null);

export default function ProductContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);

  useEffect(() => {
    const paginatedProducts = Products;
    dispatch({ type: "FETCH_PRODUCTS", payload: paginatedProducts });
  }, []);

  const showResults = (key: string) => {
    if (key === "") {
      dispatch({ type: "FETCH_PRODUCTS", payload: Products });
    } else {
      dispatch({ type: "SEARCH_PRODUCTS", payload: Products, key: key });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        state: state,
        showResults,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === null) {
    throw new Error("useProducts must be used within a ProductContextProvider");
  }
  return context;
};
