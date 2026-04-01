"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import { locale } from "@/lib/locale";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface SimpleGestureProps {
  onCtaClick: () => void;
}

export default function SimpleGesture({ onCtaClick }: SimpleGestureProps) {
  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-16">
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center leading-tight"
          variants={fadeUp}
        >
          <span className="text-coral">{locale.simpleGesture.titleHighlight}</span>
          <br />
          <span className="text-brown">{locale.simpleGesture.titleRest}</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="shrink-0 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src="/img/img-chien.svg"
              alt="Person hugging their dog"
              width={300}
              height={290}
              className="w-48 md:w-64 lg:w-72"
            />
          </motion.div>
          <motion.div
            className="space-y-6 text-center md:text-left order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p className="text-sm md:text-base text-body-light" variants={fadeUp}>
              {locale.simpleGesture.description}
            </motion.p>
            <motion.div className="space-y-3" variants={fadeUp}>
              <Button onClick={onCtaClick}>{locale.simpleGesture.cta}</Button>
              <p className="text-xs md:text-sm font-bold text-brown">
                {locale.simpleGesture.disclaimer}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
