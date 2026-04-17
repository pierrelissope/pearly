"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function Header() {
  return (
    <motion.header
      className="w-full py-4 px-6 md:px-12 relative z-10"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-6xl mx-auto">
        <Image src="/img/logo.svg" alt="Pearly" width={60} height={60} priority />
      </div>
    </motion.header>
  );
}
