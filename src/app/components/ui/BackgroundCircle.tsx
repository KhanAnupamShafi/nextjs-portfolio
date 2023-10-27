'use client';

import { motion } from 'framer-motion';

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center">
      <div className="absolute border border-[#333333] h-[200px] w-[200px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-[#333333] h-[300px] w-[300px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-[#333333] h-[500px] w-[500px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] rounded-full mt-52 animate-pulse" />
      <div />
    </motion.div>
  );
};

export default BackgroundCircles;
