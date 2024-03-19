"use client";

import { IProduct } from "@/interface/product.interface";
import { useWindowWidth } from "@react-hook/window-size";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { ProductDescription } from "./ProductDescription";

type IProps = {
  product: IProduct;
};

const ProductDetails = ({ product }: IProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const width = useWindowWidth();

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 700]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0]),
    springConfig
  );
  return (
    <div ref={ref} className="relative w-full container mx-auto">
      <div className="flex items-center h-full min-h-[90vh]">
        <div className="relative z-50 flex items-center h-full w-full flex-col p-2 lg:flex-row lg:gap-8">
          <motion.div
            style={{
              translateY,
              opacity: width < 768 ? opacity : 1,
            }}
            className="relative z-0 basis-full md:z-10 lg:basis-4/12"
          >
            <img
              src={product?.featuredImage?.url}
              alt={product.title}
              className={`block h-auto w-full`}
            />
          </motion.div>

          <div className="basis-full lg:basis-8/12">
            <ProductDescription
              product={product}
              scrollYProgress={scrollYProgress}
            />
          </div>
        </div>
      </div>

      <motion.div
        style={{ zIndex: -1 }}
        className="absolute top-0 grid h-full w-full place-items-center opacity-5"
      >
        <h1
          className={`text-center text-[18vw] font-bold uppercase leading-none tracking-tight text-gray-700`}
        >
          {product.title}
        </h1>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
