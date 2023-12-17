type VariantProps = {
  id: number;
  title: string;
  handleOnChange?: (id: number) => any;
  isSelected?: number;
};

const VariantCard = ({
  id,
  title,
  handleOnChange,
  isSelected,
}: VariantProps) => {
  return (
    <div
      className={`shadow-md border ${
        isSelected === id ? "border-pink-600" : "border-gray-300"
      } active: px-3 py-1 cursor-pointer font-semibold rounded-2xl`}
      onClick={() => handleOnChange!(id)}
    >
      <p>{title}</p>
    </div>
  );
};

export default VariantCard;
