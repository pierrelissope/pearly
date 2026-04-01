"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={`bg-coral hover:bg-coral-dark text-white font-bold py-3 px-8 rounded-full transition-colors cursor-pointer text-sm md:text-base ${className}`}
    >
      {children}
    </motion.button>
  );
}
