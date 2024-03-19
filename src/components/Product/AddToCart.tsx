import { IProductVariant } from "@/interface/product.interface";
import clsx from "clsx";

const buttonClasses =
  "relative flex w-fit px-4 md:px-10 items-center justify-center rounded-2xl uppercase bg-black p-4 tracking-wide text-white";
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
