import { IProductVariant } from "@/interface/product.interface";
import clsx from "clsx";

const buttonClasses =
  "relative flex w-fit px-2 md:px-10 items-center justify-center rounded-2xl uppercase bg-black py-2 md:py-4 tracking-wide text-white text-xs md:text-base";
const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

const AddToCart = ({
  variants,
  availableForSale,
}: {
  variants: IProductVariant[];
  availableForSale: boolean;
}) => {
  return (
    <form>
      <button
        aria-label="Add to cart"
        className={clsx(buttonClasses, {
          "hover:opacity-90": true,
        })}
      >
        <div>Add To Cart</div>
      </button>
    </form>
  );
};

export default AddToCart;
