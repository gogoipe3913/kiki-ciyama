import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

interface MainLayoutProps {
  children: any;
}

export const MainLayout: React.FC<MainLayoutProps> = (
  props: MainLayoutProps
) => {
  const { children } = props;
  return (
    <>
      <motion.div
        initial={pageVariants.initial}
        animate={pageVariants.in}
        exit={pageVariants.out}
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </>
  );
};

export default MainLayout;
