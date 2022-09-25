import React, { memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const AnimatedImage = ({ source, className, ...props }) => {
  return (
    <motion.img
      initial={{
        scale: 0.9,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "tween",
        duration: 0.5,
      }}
      src={process.env.PUBLIC_URL + source}
      className={twMerge(className)}
      {...props}
    ></motion.img>
  );
};

export default memo(AnimatedImage);
