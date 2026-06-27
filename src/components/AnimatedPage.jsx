import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
};

const transition = {
  duration: 0.25,
  ease: [0.25, 0.8, 0.25, 1], // Faster, smoother ease-out curve
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
