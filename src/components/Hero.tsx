"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import { locale } from "@/lib/locale";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="w-full px-6 md:px-12 py-8 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <motion.div
          className="md:basis-1/2 md:min-w-0 space-y-[clamp(0.75rem,1.5vw,1.5rem)]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="font-extrabold leading-tight text-[clamp(1.25rem,3.5vw,3rem)] whitespace-nowrap"
            variants={fadeUp}
          >
            <span className="text-coral">{locale.hero.titleLine1}</span>
            <br />
            <span className="text-brown">{locale.hero.titleLine2}</span>
            <br />
            <span className="text-coral">{locale.hero.titleLine3}</span>
          </motion.h1>
          <motion.p
            className="font-bold text-brown text-[clamp(0.75rem,1.2vw,1rem)]"
            variants={fadeUp}
          >
            {locale.hero.subtitle}
          </motion.p>
          <motion.p className="text-body-light text-[clamp(0.75rem,1.2vw,1rem)]" variants={fadeUp}>
            {locale.hero.description}
          </motion.p>
          <motion.div className="flex flex-col items-center space-y-3" variants={fadeUp}>
            <Button onClick={onCtaClick}>{locale.hero.cta}</Button>
            <p className="text-xs md:text-sm font-bold text-brown text-center">{locale.hero.disclaimer}</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:basis-1/2 md:min-w-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <Image
            src="/img/img-hero-chat.svg"
            alt="Person with their pet"
            width={500}
            height={350}
            priority
            className="w-full max-w-xs md:max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
