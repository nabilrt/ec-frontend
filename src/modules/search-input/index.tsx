import clsx from "clsx";
import { forwardRef } from "react";

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = (
  { children, className, ...props }: InputProps,
  ref: any
) => {
  return (
    <input
      {...props}
      ref={ref}
      className={clsx(
        "px-6 py-4 font-semibold text-sm border-2 rounded-md w-full border-[#fc8eac] active:border-pink-700",
        className
      )}
    >
      {children}
    </input>
  );
};

const SearchedInput = forwardRef(SearchInput);

export default SearchedInput;
