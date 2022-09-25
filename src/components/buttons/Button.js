import { motion } from "framer-motion";
import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const MenuItem = ({ children, to, background, className }) => {
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
      navigate("/" + to);
    }
  }, [to, navigate]);

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
      transition={{ type: "spring", damping: 16 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onClick}
      className={twMerge(
        "text uppercase",
        className,
        background ? "bg-second p-4" : ""
      )}
      whileHover={{ scale: 1.05, borderRadius: 16 }}
    >
      <motion.p
        animate={{
          color: isHover ? (background ? "#FFF" : "#0052AC") : "#FFF",
        }}
        className="text font-bold uppercase text-xl text-center"
      >
        {children}
      </motion.p>
    </motion.button>
  );
};

export default memo(MenuItem);
