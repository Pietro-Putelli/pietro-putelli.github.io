import { motion } from "framer-motion";
import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ children, to, className }) => {
  const [isHover, setIsHover] = useState(0);

  const navigate = useNavigate();

  const onHoverStart = useCallback(() => {
    setIsHover(true);
  }, []);

  const onHoverEnd = useCallback(() => {
    setIsHover(false);
  }, []);

  const onClick = useCallback(() => {
    if (to?.includes("https") || to?.includes("mailto")) {
      window.location.replace(to);
    } else {
      navigate(to);
    }
  }, [to]);

  return (
    <motion.button
      initial={{
        opacity: 0,
        translateY: 10,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        scale: 1,
      }}
      transition={{ delay: 1 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={className}
      onClick={onClick}
    >
      <motion.p
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          type: "spring",
          damping: 16,
        }}
        animate={{ color: isHover ? "#0052AC" : "#FFF" }}
        className="text font-bold uppercase text-xl text-center"
      >
        {children}
      </motion.p>
    </motion.button>
  );
};

export default memo(MenuItem);
