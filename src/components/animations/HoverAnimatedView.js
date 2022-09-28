import { motion } from "framer-motion";
import React, { memo } from "react";

const HoverAnimatedView = ({ children, ...props }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        borderRadius: 8,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default memo(HoverAnimatedView);
