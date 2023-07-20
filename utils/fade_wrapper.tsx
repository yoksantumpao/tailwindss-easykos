"use client";
import React from "react";
import { motion } from "framer-motion";

interface wrapper {
  children: React.ReactNode;
  x: number;
  y: number;
}

function FadeWrapper({ children, x, y }: wrapper) {
  return (
    <motion.div
      initial={{
        x,
        y,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.01,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeWrapper;
