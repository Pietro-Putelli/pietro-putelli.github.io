import React, { memo } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const AnimatedText = ({
  children,
  delay,
  isFromBottom,
  background,
  className,
}) => {
  return (
    <motion.p
      initial={{
        translateY: isFromBottom ? 30 : -30,
        opacity: 0,
      }}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        type: "tween",
        duration: 0.5,
        delay,
      }}
      className={twMerge(
        "text uppercase",
        className,
        background ? "bg-second p-4" : ""
      )}
    >
      {children}
    </motion.p>
  );
};

export default memo(AnimatedText);
