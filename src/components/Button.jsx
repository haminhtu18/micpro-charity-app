import Image from "next/image";

const Button = ({ type, title, variant, iconRight, iconLeft, full }) => {
  return (
    <button
      className={`flexCenter gap-3 ${variant} rounded-full border ${
        full && "w-full"
      } `}
      type={type}
    >
      {iconLeft && <Image src={iconLeft} alt={title} width={24} height={24} />}
      <label className="regular-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
      {iconRight && (
        <Image src={iconRight} alt={title} width={24} height={24} />
      )}
    </button>
  );
};

export default Button;
