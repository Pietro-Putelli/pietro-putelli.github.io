import React, { memo } from "react";
import { motion } from "framer-motion";

const FadeAnimatedView = ({ className, children }) => {
  return <motion.div className={className}>{children}</motion.div>;
};

export default memo(FadeAnimatedView);
