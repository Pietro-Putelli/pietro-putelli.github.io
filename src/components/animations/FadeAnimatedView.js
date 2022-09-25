import React, { memo } from "react";
import { motion } from "framer-motion";

const FadeAnimatedView = ({ children }) => {
  return <motion.div>{children}</motion.div>;
};

export default memo(FadeAnimatedView);
