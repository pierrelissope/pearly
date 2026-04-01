"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { locale } from "@/lib/locale";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function DiseaseSection() {
  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-16">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight"
          variants={fadeUp}
        >
          <span className="text-coral">{locale.diseases.titleHighlight}</span>
          <br />
          <span className="text-brown">{locale.diseases.titleRest}</span>
        </motion.h2>
        <motion.p
          className="text-sm md:text-base text-body-light max-w-2xl mx-auto"
          variants={fadeUp}
          dangerouslySetInnerHTML={{ __html: locale.diseases.description }}
        />
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-4"
          variants={staggerContainer}
        >
          {locale.diseases.cards.map((card) => (
            <motion.div
              key={card.key}
              className="flex flex-col items-center gap-3"
              variants={fadeUp}
            >
              <Image
                src={card.icon}
                alt={card.label}
                width={78}
                height={78}
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <span className="text-sm font-bold text-brown text-center">{card.label}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-sm md:text-base text-body-light"
          variants={fadeUp}
          dangerouslySetInnerHTML={{ __html: locale.diseases.costWarning }}
        />
        <motion.p
          className="text-sm md:text-base text-body"
          variants={fadeUp}
          dangerouslySetInnerHTML={{ __html: locale.diseases.urgency }}
        />
      </motion.div>
    </section>
  );
}
