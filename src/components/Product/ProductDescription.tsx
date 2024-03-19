"use client";

import { IProduct } from "@/interface/product.interface";
import { useWindowWidth } from "@react-hook/window-size";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import Price from "./Price";
import AddSubscription from "./AddSubscription";

export function ProductDescription({
  product,
  scrollYProgress,
}: {
  product: IProduct;
  scrollYProgress: MotionValue<number>;
}) {
  const screenWidth = useWindowWidth();
  const [animationProperty, setAnimationProperty] = useState(1100);

  useEffect(() => {
    if (screenWidth > 1536) {
      setAnimationProperty(1100);
    } else if (screenWidth > 1280 && screenWidth < 1536) {
      setAnimationProperty(800);
    } else if (screenWidth > 1024 && screenWidth < 1280) {
      setAnimationProperty(600);
    } else if (screenWidth > 640 && screenWidth < 768) {
      setAnimationProperty(350);
    } else if (screenWidth < 375) {
      setAnimationProperty(200);
    }
  }, [screenWidth]);

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const width = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [animationProperty, 0]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.2],
      [screenWidth < 640 ? 30 : -42, animationProperty]
    ),
    springConfig
  );

  return (
    <>
      <div className="mb-6 flex flex-col">
        <h2 className="px-2">{product.title}</h2>
        <div className="mr-auto flex px-2 pt-2 font-nats">
          <Price
            className="text-5xl"
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
          <div className="ml-10 pt-4">renews every month</div>
        </div>
      </div>

      {/* Variant Selector has been turned off, but not deleted */}
      {/* <VariantSelector options={product.options} variants={product.variants} /> */}

      <motion.div
        style={{
          translateX,
          width,
        }}
        className={`absolute z-10 mt-[9px] h-[35px] bg-[#DDD544]`}
      >
        {/* <p>Single Ingredient Formulation</p> */}
      </motion.div>

      <div className="flex gap-4 pt-16">
        <AddToCart
          variants={product.variants}
          availableForSale={product.availableForSale}
        />
        <AddSubscription />
      </div>
    </>
  );
}
