import clsx from "clsx";

type ButtonProps = {
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "danger" | "warning" | "success";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-md font-semibold text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "text-white bg-pink-500 hover:bg-pink-700": variant === "primary",
          "text-white bg-emerald-400 hover:bg-emerald-600":
            variant === "secondary",
          "text-white bg-red-600 hover:bg-red-800": variant === "danger",
          "text-white bg-yellow-500 hover:bg-yellow-700": variant === "warning",
          "text-white bg-blue-500 hover:bg-blue-700": variant === "success",
        },
        className
      )}
    >
      {isLoading ? "Loading" : children}
    </button>
  );
};

export default Button;
