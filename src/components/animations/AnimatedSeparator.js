import { motion } from "framer-motion";
import React, { memo } from "react";
import { isMobile } from "react-device-detect";
import { twMerge } from "tailwind-merge";

const AnimatedSeparator = ({ className }) => {
  return (
    <motion.div
      initial={{
        width: 0,
      }}
      animate={{
        width: isMobile ? "90%" : "100%",
      }}
      transition={{
        delay: 0.5,
        type: "tween",
        duration: 0.5,
      }}
      className={twMerge("bg-white opacity-20 h-[0.5px] my-8", className)}
    ></motion.div>
  );
};

export default memo(AnimatedSeparator);
