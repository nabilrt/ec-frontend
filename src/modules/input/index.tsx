import clsx from "clsx";

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ children, className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        "px-4 py-2 font-semibold text-sm border-2 rounded-md w-full border-pink-500 focus:border-pink-700",
        className
      )}
    >
      {children}
    </input>
  );
};

export default Input;
